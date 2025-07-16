{/* <section class='grid-test'>

                <div class='row'>
                    <div class='col-1-of-2'>
                        col 1 of 2    
                    </div> 
                    <div class='col-1-of-2'>
                        col 1 of 2    
                    </div> 
                </div>

                <div class='row'>
                    <div class='col-1-of-3'>
                        col 1 of 3   
                    </div> 
                    <div class='col-1-of-3'>
                        col 1 of 3  
                    </div> 
                    <div class='col-1-of-3'>
                        col 1 of 3  
                    </div> 
                </div>

                <div class='row'>
                    <div class='col-1-of-3'>
                        col 1 of 3   
                    </div> 
                    <div class='col-2-of-3'>
                        col 2 of 3  
                    </div> 
                </div>

                <div class='row'>
                    <div class='col-1-of-4'>
                        col 1 of 4   
                    </div> 
                    <div class='col-1-of-4'>
                        col 1 of 4  
                    </div> 
                    <div class='col-1-of-4'>
                        col 1 of 4  
                    </div> 
                    <div class='col-1-of-4'>
                        col 1 of 4
                    </div> 
                </div>

                <div class='row'>
                    <div class='col-1-of-4'>
                        col 1 of 4   
                    </div> 
                    <div class='col-1-of-4'>
                        col 1 of 4  
                    </div> 
                    <div class='col-2-of-4'>
                        col 2 of 4  
                    </div> 
                </div>

                <div class='row'>
                    <div class='col-1-of-4'>
                        col 1 of 4   
                    </div> 
                    <div class='col-3-of-4'>
                        col 3 of 4  
                    </div> 
                </div>

            </section>


////////////////   /// 1 OF 2
  @mixin grid_1_2($margin, $gutter, $bgcolor ){
    width: calc((100% - #{$gutter}) / 2);
        @include background($bgcolor);
        float: left;
        
        &:not(:last-child){
        margin-right:$margin; 
        }
  }


  /////on scsss usage
  @include mixins.clearfix; ///restore the ori height
  [class^="col-"]{
      color: themeColors.$color-surface-light;
      background-color: themeColors.$color-surface-dark;
  }

  .col-1-of-2 {
      @include mixins.grid_1_2(
          variables.$grid-margin,
          variables.$gutter-horizontal,
          themeColors.$color-secondary-light
      );
  } */}