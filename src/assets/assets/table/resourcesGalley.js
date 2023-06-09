$(function() {
    //toggle 3d navigation
    $(document).on('click', '.cd-3d-nav-trigger', function() {
      toggle3dBlock(!$('.cd-header').hasClass('nav-is-visible'));
    });
  
    //select a new item from the 3d navigation
    $(document).on('click', '.cd-3d-nav a', function() {
      var selected = $(this);
      selected.parent('li').addClass('cd-selected').siblings('li').removeClass('cd-selected');
      updateSelectedNav('close');
    });
  
    $(window).on('resize', function() {
      window.requestAnimationFrame(updateSelectedNav);
    });
  
    function toggle3dBlock(addOrRemove) {
      if (typeof(addOrRemove) === 'undefined') addOrRemove = true;
      $('.cd-header').toggleClass('nav-is-visible', addOrRemove);
      $('main').toggleClass('nav-is-visible', addOrRemove);
      $('.cd-3d-nav-container').toggleClass('nav-is-visible', addOrRemove);
    }
  
    //this function update the .cd-marker position
    function updateSelectedNav(type) {
      var selectedItem = $('.cd-selected'),
        selectedItemPosition = selectedItem.index() + 1,
        leftPosition = selectedItem.offset().left,
        backgroundColor = selectedItem.data('color');
  
      $('.cd-marker').removeClassPrefix('color').addClass('color-' + selectedItemPosition).css({
        'left': leftPosition,
      });
      if (type == 'close') {
        $('.cd-marker').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function() {
          toggle3dBlock(false);
        });
      }
    }
  
    $.fn.removeClassPrefix = function(prefix) {
      this.each(function(i, el) {
        var classes = el.className.split(" ").filter(function(c) {
          return c.lastIndexOf(prefix, 0) !== 0;
        });
        el.className = $.trim(classes.join(" "));
      });
      return this;
    };
  
    //open/close lateral filter
    $(document).on('click', '.cd-filter-trigger', function() {
      triggerFilter(true);
    });
    $(document).on('click', '.cd-filter .cd-close', function() {
      triggerFilter(false);
    });
  
    function triggerFilter($bool) {
      var elementsToTrigger = $([$('.cd-filter-trigger'), $('.cd-filter'), $('.cd-tab-filter'), $('.cd-gallery')]);
      elementsToTrigger.each(function() {
        $(this).toggleClass('filter-is-visible', $bool);
      });
    }
  
    //mobile version - detect click event on filters tab
    var filter_tab_placeholder = $('.cd-tab-filter .placeholder a'),
      filter_tab_placeholder_default_value = 'Select',
      filter_tab_placeholder_text = filter_tab_placeholder.text();
  
    $(document).on('click', '.cd-tab-filter li', function(event) {
      //detect which tab filter item was selected
      var selected_filter = $(event.target).data('type');
  
      //check if user has clicked the placeholder item
      if ($(event.target).is(filter_tab_placeholder)) {
        (filter_tab_placeholder_default_value == filter_tab_placeholder.text()) ? filter_tab_placeholder.text(filter_tab_placeholder_text) : filter_tab_placeholder.text(filter_tab_placeholder_default_value);
        $('.cd-tab-filter').toggleClass('is-open');
  
        //check if user has clicked a filter already selected 
      } else if (filter_tab_placeholder.data('type') == selected_filter) {
        filter_tab_placeholder.text($(event.target).text());
        $('.cd-tab-filter').removeClass('is-open');
  
      } else {
        //close the dropdown and change placeholder text/data-type value
        $('.cd-tab-filter').removeClass('is-open');
        filter_tab_placeholder.text($(event.target).text()).data('type', selected_filter);
        filter_tab_placeholder_text = $(event.target).text();
  
        //add class selected to the selected filter item
        $('.cd-tab-filter .selected').removeClass('selected');
        $(event.target).addClass('selected');
      }
    });
  
    //close filter dropdown inside lateral .cd-filter 
    $(document).on('click', '.cd-filter-block h4', function() {
      $(this).toggleClass('closed').siblings('.cd-filter-content').slideToggle(300);
    })
  
    //fix lateral filter and gallery on scrolling
   
    
  
    /************************************
      MitItUp filter settings
      More details: 
      https://mixitup.kunkalabs.com/
      or:
      https://codepen.io/patrickkunka/
    *************************************/
  
    buttonFilter.init();
    self.$container.mixItUp({
        selectors: {
          target: '.mix',
          filter: '.filter'
        },
        callbacks: {
          onMixStart: function() {
          $('.cd-fail-message').fadeOut(200);
          },
          onMixFail: function() {
            $('.cd-fail-message').fadeIn(200);
          }
        }
      });
      
  
    //search filtering
    //credits https://codepen.io/edprats/pen/pzAdg
    var inputText;
    var $matching = $();
  
    var delay = (function() {
      var timer = 0;
      return function(callback, ms) {
        clearTimeout(timer);
        timer = setTimeout(callback, ms);
      };
    })();
  
    $(document).on("keyup", ".cd-filter-content input[type='search']", function() {
      // Delay function invoked to make sure user stopped typing
      delay(function() {
        inputText = $(".cd-filter-content input[type='search']").val().toLowerCase();
        // Check to see if input field is empty
        if ((inputText.length) > 0) {
          $('.mix').each(function() {
            var $this = $(this);
  
            // add item to be filtered out if input text matches items inside the title   
            if ($this.attr('class').toLowerCase().match(inputText)) {
              $matching = $matching.add(this);
            } else {
              // removes any previously matched item
              $matching = $matching.not(this);
            }
          });
          $('.cd-gallery ul').mixItUp('filter', $matching);
        } else {
          // resets the filter to show all item if input is empty
          $('.cd-gallery ul').mixItUp('filter', 'all');
        }
      }, 200);
    });
  });
  
  /*****************************************************
    MixItUp - Define a single object literal 
    to contain all filter custom functionality
  *****************************************************/
  var buttonFilter = {
    // Declare any variables we will need as properties of the object
    $filters: null,
    groups: [],
    outputArray: [],
    outputString: '',
  
    // The "init" method will run on document ready and cache any jQuery objects we will need.
    init: function() {
      var self = this; // As a best practice, in each method, we will assign "this" to the variable "self" so that it remains scope-agnostic. We will use it to refer to the parent "buttonFilter" object so that we can share methods and properties between all parts of the object.
  
      self.$filters = $('.cd-main-content');
      self.$container = $('.cd-gallery ul');
  
      self.$filters.find('.cd-filters').each(function() {
        var $this = $(this);
  
        self.groups.push({
          $inputs: $this.find('.filter'),
          active: '',
          tracker: false
        });
      });
  
      self.bindHandlers();
    },
  
    // The "bindHandlers" method will listen for whenever a button is clicked. 
    bindHandlers: function() {
      var self = this;
  
      self.$filters.on('click', 'a', function(e) {
        self.parseFilters();
      });
      self.$filters.on('change', function() {
        self.parseFilters();
      });
    },
  
    parseFilters: function() {
      var self = this;
  
      // loop through each filter group and grap the active filter from each one.
      for (var i = 0, group; group = self.groups[i]; i++) {
        group.active = [];
        group.$inputs.each(function() {
          var $this = $(this);
          if ($this.is('input[type="radio"]') || $this.is('input[type="checkbox"]')) {
            if ($this.is(':checked')) {
              group.active.push($this.attr('data-filter'));
            }
          } else if ($this.is('select')) {
            group.active.push($this.val());
          } else if ($this.find('.selected').length > 0) {
            group.active.push($this.attr('data-filter'));
          }
        });
      }
      self.concatenate();
    },
  
    concatenate: function() {
      var self = this;
  
      self.outputString = ''; // Reset output string
  
      for (var i = 0, group; group = self.groups[i]; i++) {
        self.outputString += group.active;
      }
  
      // If the output string is empty, show all rather than none:    
      !self.outputString.length && (self.outputString = 'all');
  
      // Send the output string to MixItUp via the 'filter' method:    
      if (self.$container.mixItUp('isLoaded')) {
        self.$container.mixItUp('filter', self.outputString);
      }
    }
  };
  