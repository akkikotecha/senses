$(document).ready(function () {
    $(window)
      .resize(function () {
        if ($(window).width() > 1024) {
          $(".header_top").addClass("d-none");
        } else {
          $(".header_top").removeClass("d-none");
        }
      })
      .resize();
  });
  
  $(function () {
    "use strict";
    $(".counter").counterUp({
      delay: 10,
      time: 1000,
    });
  
    $(".menu_toggle_new").on("click", function () {
      $(".font-montserrat").toggleClass("offcanvas-active");
      $(".brand-name").toggleClass("brand-name-margin-set");
      $(".cursor-pointer").toggleClass("padding_left_css");
    });
  
    function getRandomValues() {
      // data setup
      var values = new Array(20);
  
      for (var i = 0; i < values.length; i++) {
        values[i] = [
          5 + randomVal(),
          10 + randomVal(),
          15 + randomVal(),
          20 + randomVal(),
          30 + randomVal(),
          35 + randomVal(),
          40 + randomVal(),
          45 + randomVal(),
          50 + randomVal(),
        ];
      }
  
      return values;
    }
    function randomVal() {
      return Math.floor(Math.random() * 80);
    }
  
    // MINI BAR CHART
    var values2 = getRandomValues();
    var paramsBar = {
      type: "bar",
      barWidth: 5,
      height: 25,
    };
  
    $("#mini-bar-chart1").sparkline(values2[0], paramsBar);
    paramsBar.barColor = "#6c757d";
    $("#mini-bar-chart2").sparkline(values2[1], paramsBar);
    paramsBar.barColor = "#6c757d";
    $("#mini-bar-chart3").sparkline(values2[2], paramsBar);
    paramsBar.barColor = "#6c757d";
    $("#mini-bar-chart4").sparkline(values2[3], paramsBar);
    paramsBar.barColor = "#6c757d";
  });
  
  $(document).ready(function () {
    //  console.log("HELLO "+JSON.stringify(dataSource));
    var items = [];
    //var ResponseData=[];
    $.ajax({
      url: window.localStorage.getItem("BaseURLAPI") + "getAllBlogs",
      method: "GET",
      // data:x,_token:"{{ csrf_token() }}",
      headers: {
        "X-CSRF-TOKEN": $('meta[name="csrf-token"]').attr("content"),
      },
      success: function (result) {
        console.log(result);
        $.each(result.data, (i, val) => {
          const div = document.createElement("div");
          div.innerHTML = val.overview;
          const plainTextOverview = div.textContent || div.innerText;
  
        //   console.log("IMAGE : " + val.subcategoriesdata[0].subCategoryName);
          items.push({
            ID: val._id,
            title: val.title,
            sub_title: val.sub_title,
            Description:val.Description,
            image:val.image,
          });
        });
  
        console.log("items : " + items);
  
        $("#grid").kendoGrid({
          dataSource: items,
          height: 680,
          pageable: {
            refresh: true,
            pageSizes: true,
            buttonCount: 5,
          },
          sortable: true,
          navigatable: true,
          resizable: true,
          reorderable: true,
          toolbarColumnMenu: true,
          groupable: true,
          dataBound: onDataBound,
          toolbar: ["excel", "pdf", "search"],
          serverSorting: true,
          serverFiltering: true,
          serverPaging: true,
          sortable: true,
          filterable: true,
          columnMenu: {
            componentType: "modern",
          },
          excel: {
            fileName: "Code of Polices.xlsx",
            filterable: true,
            allPages: true,
          },
          columns: [
            //     {
            //     selectable: true,
            //     width: 75,
            //     attributes: {
            //         "class": "checkbox-align",
            //     },
            //     headerAttributes: {
            //         "class": "checkbox-align",
            //     }
            // },

           
            {
                title: "Image",
                template: "<img src='./assets/#:image#' style='width:100%;margin-top:20px;margin-bottom:20px;'>",
            },
            {
              field: "title",
              title: "Title",
            },
            {
              field: "sub_title",
              title: "Sub Title",
            },
           
              {
                field: "Description",
                title: "Description",
              },
                     ],
          dataBound: function () {
            $(".k-grid-myDelete span").addClass("k-icon k-delete");
          },
          cancel: function () {
            setTimeout(function () {
              $(".k-grid-myDelete span").addClass("k-icon k-delete");
            });
          },
        });
        //ResponseData = items;
        //console.log("HELO "+ResponseData);
        //        console.log("Item "+items);
      },
    });
  });
  
  function onDataBound(e) {
    var grid = this;
    grid.table.find("tr").each(function () {
      var dataItem = grid.dataItem(this);
      var themeColor = dataItem.Discontinued ? "success" : "error";
      var text = dataItem.Discontinued ? "available" : "not available";
  
      $(this).find(".badgeTemplate").kendoBadge({
        themeColor: themeColor,
        text: text,
      });
  
      $(this).find(".rating").kendoRating({
        min: 1,
        max: 5,
        label: false,
        selection: "continuous",
      });
  
      $(this)
        .find(".sparkline-chart")
        .kendoSparkline({
          legend: {
            visible: false,
          },
          data: [dataItem.TargetSales],
          type: "bar",
          chartArea: {
            margin: 0,
            width: 180,
            background: "transparent",
          },
          seriesDefaults: {
            labels: {
              visible: true,
              format: "{0}%",
              background: "none",
            },
          },
          categoryAxis: {
            majorGridLines: {
              visible: false,
            },
            majorTicks: {
              visible: false,
            },
          },
          valueAxis: {
            type: "numeric",
            min: 0,
            max: 130,
            visible: false,
            labels: {
              visible: false,
            },
            minorTicks: { visible: false },
            majorGridLines: { visible: false },
          },
          tooltip: {
            visible: false,
          },
        });
  
      kendo.bind($(this), dataItem);
    });
  }
  
  function returnFalse() {
    return false;
  }
  
  $("#grid").on("click", "button.removeData", function () {
    var id = $(this).attr("data-val");
    Swal.fire({
      title: "Are you Sure?",
      text: "",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#fd7e14",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes",
    }).then((result) => {
      if (result.isConfirmed) {
        //   console.log(window.localStorage.getItem('BaseURLAPI')+"deleteProjectManager/"+id);
        $.ajax({
          url:
            window.localStorage.getItem("BaseURLAPI") + "deleteCareerJob/" + id,
          method: "GET",
          // data:x,_token:"{{ csrf_token() }}",
          headers: {
            "X-CSRF-TOKEN": $('meta[name="csrf-token"]').attr("content"),
          },
          success: function (result) {
            Swal.fire({
              title: "Career Job Remove Successfully...",
              text: "",
              icon: "success",
              confirmButtonText: "ok",
              confirmButtonColor: "#fd7e14",
            });
  
            window.location.reload();
          },
        });
      }
    });
    //      console.log("HELLLLOO O "+$(this).attr('data-val'));
  });
  
  function clientCategoryEditor(container, options) {
    $('<input required name="Category">')
      .appendTo(container)
      .kendoDropDownList({
        autoBind: false,
        dataTextField: "CategoryName",
        dataValueField: "CategoryID",
        dataSource: {
          data: categories,
        },
      });
  }
  
  function clientCountryEditor(container, options) {
    $('<input required name="Country">')
      .appendTo(container)
      .kendoDropDownList({
        dataTextField: "CountryNameLong",
        dataValueField: "CountryNameShort",
        template:
          "<div class='dropdown-country-wrap'><img src='../content/web/country-flags/#:CountryNameShort#.png' alt='#: CountryNameLong#' title='#: CountryNameLong#' width='30' /><span>#:CountryNameLong #</span></div>",
        dataSource: {
          transport: {
            read: {
              url: " https://demos.telerik.com/kendo-ui/service/countries",
              dataType: "jsonp",
            },
          },
        },
        autoWidth: true,
      });
  }
  
  var categories = [
    {
      CategoryID: 1,
      CategoryName: "Beverages",
    },
    {
      CategoryID: 2,
      CategoryName: "Condiments",
    },
    {
      CategoryID: 3,
      CategoryName: "Confections",
    },
    {
      CategoryID: 4,
      CategoryName: "Dairy Products",
    },
    {
      CategoryID: 5,
      CategoryName: "Grains/Cereals",
    },
    {
      CategoryID: 6,
      CategoryName: "Meat/Poultry",
    },
    {
      CategoryID: 7,
      CategoryName: "Produce",
    },
    {
      CategoryID: 8,
      CategoryName: "Seafood",
    },
  ];
  
  $("#grid").on("click", "button.view_data", function () {
    window.localStorage.setItem("CategoryDetailId", $(this).attr("data-id"));
    window.location.href =
      window.localStorage.getItem("baseurlhostname") +
      "admin_product_detail_show";
    // $('#edit_id').val();
  });
  
  $("#grid").on("click", "button.edit_data", function () {
    $("#edit_title").val($(this).attr("data-title"));
    $("#edit_descrirption").val($(this).attr("data-discription"));
    $("#edit_id").val($(this).attr("data-id"));
    $("#editProductModal").modal("show");
  });
  
  $(".close").on("click", function () {
    $("#editProductModal").modal("hide");
    $("#exampleModal").modal("hide");
  });
  $(".btn-close").on("click", function () {
    $("#editProductModal").modal("hide");
    $("#exampleModal").modal("hide");
  });
  