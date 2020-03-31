$('select').on('change', function (e) {
    $('#form-container form').hide();
    $('#' + this.value).show();
});