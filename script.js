$(document).ready(function () {
    $('#myform').validate({
        rules: {
            name: {
                required: true,
                minlength: 10
            },
            harga: {
                required: true,
                number: true,
                min: 5000
            },
            jenis: {
                required: true
            },
            barcode: {
                required: true,
                number: true,
                minlength: 10
            }
        },
        messages: {
            name: {
                required: 'wajib diisi!',
                minlength: 'minimal 10 karakter'
            },
            harga: {
                required: 'wajib diisi',
                number: 'diisi dengan angka',
                min: 'masukkan minimal 5000'
            },
            jenis: {
                required: 'ini wajib diisi',
            },
            barcode: {
                required: 'wajib diisi',
                number: 'diisi dengan angka',
                minlength: 'masukkan minimal 10 digit'
            }
        }
    })


});