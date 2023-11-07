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
    url: window.localStorage.getItem("BaseURLAPI") + "getSubCategoriesAdmin",
    method: "GET",
    // data:x,_token:"{{ csrf_token() }}",
    headers: {
      "X-CSRF-TOKEN": $('meta[name="csrf-token"]').attr("content"),
    },
    success: function (result) {
      console.log(result);
      $.each(result.data, (i, val) => {
        console.log("IMAGE : " + val.images[0]);
        items.push({
          ID: val._id,
          title: val.subCategoryName,
          status: val.status,
          description: val.images[0],
          categoryID: val.categoryId,
          categoryDescription: val.subCategoryDesc,
        });
      });

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
            field: "title",
            title: "Sub Product Name",
          },
          {
            title: "Image",
            template:
              "<img src='./assets/#:description#' style='width:35%;margin-top:20px;margin-bottom:20px;'>",
          },

          {
            template:
              "<button style='width: 5rem; border-radius: 1.5rem; font-size: 0.9rem;' class='btn btn-primary  edit_data' data-id='#:ID#'  data-title='#:title#' data-discription='#:description#' data-category='#:categoryID#'  data-category-description='#:categoryDescription#'  title='Edit' >Edit</button>",
            width: 140,
            // field: "ID",
            // <i class='fa fa-edit text-white'></i> <button class='btn btn-warning removeData ml-2' data-val=#: ID # title='Delete' ><i class='fa fa-trash text-white'></i></button>
          },
          {
            field: "status",
            title: "Status",
            template: function (dataItem) {
              var statusText = dataItem.status === 1 ? "Active" : "Inactive";
              var statusColor = dataItem.status === 1 ? "green" : "red";
              var borderRadius = "2rem";
              return `<div class="status-button" style="background-color: ${statusColor}; color: white;width:6rem; border-radius: ${borderRadius}; padding: 5px; text-align: center;">${statusText}</div>`;
            },
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

// $("#grid").on("click", "button.removeData", function () {
//   var id = $(this).attr("data-val");
//   Swal.fire({
//     title: "Are you Sure?",
//     text: "",
//     icon: "warning",
//     showCancelButton: true,
//     confirmButtonColor: "#fd7e14",
//     cancelButtonColor: "#d33",
//     confirmButtonText: "Yes",
//   }).then((result) => {
//     if (result.isConfirmed) {
//       //   console.log(window.localStorage.getItem('BaseURLAPI')+"deleteProjectManager/"+id);
//       $.ajax({
//         url:
//           window.localStorage.getItem("BaseURLAPI") + "deleteCareerJob/" + id,
//         method: "GET",
//         // data:x,_token:"{{ csrf_token() }}",
//         headers: {
//           "X-CSRF-TOKEN": $('meta[name="csrf-token"]').attr("content"),
//         },
//         success: function (result) {
//           Swal.fire({
//             title: "Career Job Remove Successfully...",
//             text: "",
//             icon: "success",
//             confirmButtonText: "ok",
//             confirmButtonColor: "#fd7e14",
//           });

//           window.location.reload();
//         },
//       });
//     }
//   });
//   //      console.log("HELLLLOO O "+$(this).attr('data-val'));
// });

$("#grid").on("click", ".status-button", function (e) {
  e.stopPropagation(); // Prevent the click event from propagating to the grid cell
  var grid = $("#grid").data("kendoGrid");
  var dataItem = grid.dataItem($(this).closest("tr"));
  var statusText = dataItem.status === 1 ? "active" : "inactive";

  Swal.fire({
    title: "Update Status",
    text: "Current Status: " + statusText,
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#ffcc00",
    cancelButtonColor: "#d33",
    confirmButtonText: "Update",
    cancelButtonText: "Cancel",
  }).then((result) => {
    if (result.isConfirmed) {
      var newStatus = dataItem.status === 1 ? 0 : 1;
      var productId = dataItem.ID;
      console.log("banner id is ", productId);

      $.ajax({
        url:
          window.localStorage.getItem("BaseURLAPI") +
          "statusChangeSubCateory/" +
          productId,
        method: "PUT",
        headers: {
          "X-CSRF-TOKEN": $('meta[name="csrf-token"]').attr("content"),
        },
        success: function (response) {
          // Update the dataItem with the new status
          dataItem.set("status", newStatus);
          grid.refresh(); // Refresh the grid to reflect the changes
          Swal.fire(
            "Updated Successfully",
            "Status has been updated.",
            "success"
          );
        },
        error: function (error) {
          Swal.fire("Update Failed", "Failed to update the status.", "error");
        },
      });
      // Assuming you have an API to update the status, you can make an AJAX call here
      // $.ajax({
      //   url: "your-update-status-api",
      //   method: "POST",
      //   data: { id: dataItem.ID, status: newStatus },
      //   success: function (result) {
      //     // Update the dataItem with the new status
      //     dataItem.set("status", newStatus);
      //     grid.refresh(); // Refresh the grid to reflect the changes
      //     Swal.fire("Updated Successfully", "Status has been updated.", "success");
      //   },
      //   error: function (error) {
      //     Swal.fire("Update Failed", "Failed to update the status.", "error");
      //   }
      // });

      // For demonstration purposes, we'll just update the dataItem locally without making an AJAX call
      dataItem.set("status", newStatus);
      grid.refresh(); // Refresh the grid to reflect the changes
      Swal.fire("Updated Successfully", "Status has been updated.", "success");
    } else if (result.dismiss === Swal.DismissReason.cancel) {
      Swal.fire(
        "Action Canceled",
        "No changes were made to the status.",
        "error"
      );
    }
  });
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

$("#grid").on("click", "button.edit_data", function () {
  // $("#edit_title").val($(this).attr("data-title"));
  // $("#edit_descrirption").val($(this).attr("data-discription"));
  $("#edit_id").val($(this).attr("data-id"));

  var title = $(this).attr("data-title");
  var description = $(this).attr("data-category-description");
  // var id = $(this).attr("data-id");

  var categoryID = $(this).attr("data-category");

  $("#edit_title").val(title);
  $("#edit_description").val(description);
  $("#edit_category").val(categoryID);

  $("#editOrgCSR").modal("show");
});

$(".close").on("click", function () {
  $("#editOrgCSR").modal("hide");
  $("#exampleModal").modal("hide");
});
$(".btn-close").on("click", function () {
  $("#editOrgCSR").modal("hide");
  $("#exampleModal").modal("hide");
});
