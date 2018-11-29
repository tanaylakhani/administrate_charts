var replaceOptions = function(selectElement, newOptions) {
  selectElement.empty();

  $.each(newOptions, function(index, value) {
    selectElement.append($("<option></option>")
     .attr("value", value).text(value));
  });
}

$(function(){
  $('select[name=resource]').change(function() {
    var resource = $(this).val();

    $.ajax({
      method: "GET",
      url: '/admin/dashboards/resource_attributes.json',
      data: { resource: resource }
    }).done(function( result ) {
      replaceOptions($('select[name=x_axis]'), result)
      replaceOptions($('select[name=y_axis]'), result)
    })
  })
})
