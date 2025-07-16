import { JSX } from "react";
import {
  Await as RrdAwait,
  defer,
  LoaderFunctionArgs,
  useLoaderData as useRrdLoaderData, //@ts-ignore
} from "react-router-dom";

export function useLoaderData<
  TLoader extends ReturnType<typeof deferredLoader>
>() {
  return useRrdLoaderData() as ReturnType<TLoader>["data"];
}

export function deferredLoader<TData extends Record<string, unknown>>(
  dataFunc: (args: LoaderFunctionArgs) => TData
) {
  return (args: LoaderFunctionArgs) =>
    defer(dataFunc(args)) as Omit<ReturnType<typeof defer>, "data"> & {
      data: TData;
    };
}

export interface AwaitResolveRenderFunction<T> {
  (data: Awaited<T>): React.ReactElement;
}

export interface AwaitProps<T> {
  children: React.ReactNode | AwaitResolveRenderFunction<T>;
  errorElement?: React.ReactNode;
  resolve: Promise<T>;
}

export function Await<T>(props: AwaitProps<T>): JSX.Element {
  return RrdAwait(props);
}

//USAGE
// // MainLayout.tsx
// import { Await, deferredLoader, useLoaderData } from "./utils";

// export const mainLayoutLoader = deferredLoader(args => ({
//     metrics: api.metrics.get()
// }));

// export const MainLayout: FC = () => {
//     const data = useLoaderData<typeof mainLayoutLoader>();

//     return (
//         <Suspense fallback={<SiderMenu />}>
//             <Await resolve={data.metrics}>
//                 {metrics => <SiderMenu metrics={metrics} />}
//             </Await>
//         </Suspense>
//     );
// };

// const router = createBrowserRouter([
//     {
//         path: "/",
//         element: <MainLayout />,
//         loader: mainLayoutLoader
//     }]);

/////api.metrics.get() returns a type of Promise<Metric[]>
////useLoaderData<typeof mainLayoutLoader>() returns a type of { metrics: Promise<Metric[]>; }
////metrics inside {metrics => ...} inside the <Await> node will be typed as Metric[]
////args are of type LoaderFunctionArgs as defined in react-router-dom, which results a type of { [key: string]: string | undefined; } for args.params
