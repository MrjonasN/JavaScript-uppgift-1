$(function () {

    // --- FUNCTIONS --- //

    // Function för att kolla om fälten har innehåll
    function validateInput(id) {
        if ($(id).val() === '') {
            $(id).addClass('is-invalid');
            return false;
        } else {
            $(id).removeClass('is-invalid');
            $(id).addClass('is-valid');
            return true;
        }
    }

    // Function för att kolla att password innehåller minst 8 tecken
    function validatePasswordLength() {
        let passwordValue = $('#password').val();

        if (passwordValue.length <= 7) {
            $('#password').addClass('is-invalid');
            $('.text-muted').attr('style', 'color: #dc3545 !important');
            return false;
        } else {
            $('#password').removeClass('is-invalid');
            $('#password').addClass('is-valid');
            $('.text-muted').attr('style', 'color: #6c757d !important');
            return true;
        }
    }

    // Function för att kolla så att email innehåller korrekt information
    function validateEmail() {
        let emailValue = $('#email').val();

        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(emailValue)) {
            $('#email').removeClass('is-invalid');
            $('#email').addClass('is-valid');
            return true;
        } else {
            $('#email').addClass('is-invalid');
            $('#email').removeClass('is-valid');
            return false;
        }
    }

    // function för att validera radio buttons
    function validateRadio() {
        let checkedMale = $('#male').prop('checked');
        let checkedFemale = $('#female').prop('checked');
        let checkedOther = $('#other').prop('checked');

        if (checkedMale === false && checkedFemale === false && checkedOther === false) {
            $('.invalid-custom-radio').html('Please enter your gender.');
            return false;
        } else {
            $('.invalid-custom-radio').html('');
            return true;
        }
    }

    // function för att validera select
    function validateSelect() {
        let select = $('#inputState').val();

        if (select === 'select') {
            $('#inputState').addClass('is-invalid');
            $('#inputState').removeClass('is-valid');
            return false;
        } else {
            $('#inputState').removeClass('is-invalid');
            $('#inputState').addClass('is-valid');
            return true;
        }
    }

    // function för att validera checkbox
    function validateCheckbox() {
        let check = $('#gridCheck').prop('checked');

        if (check === false) {
            $('.invalid-custom-checkbox').html('You must accept Terms and Conditions');
            return false;
        } else {
            $('.invalid-custom-checkbox').html('');
            return true;
        }
    }

    // Validera när man klickar ut från fältet
    $('input').blur((e) => {
        switch (e.target.id) {
            case 'firstname':
                validateInput(firstname)
                break;
            case 'lastname':
                validateInput(lastname)
                break;
            case 'email':
                validateEmail()
                break;
            case 'password':
                validatePasswordLength()
                break;
            case 'gridCheck':
                validateCheckbox()
                break;
        }
    })
    $('textarea').blur(() => {
        validateInput('#textarea')
    })
    $('select').blur(() => {
        validateSelect();
    })


    // --- SUBMIT EVENTS --- //

    // Registrering. Validera alla fält vid submit 
    $('.signup-form').submit((e) => {
        validateInput('#firstname');
        validateInput('#lastname');
        validateEmail();
        validatePasswordLength();
        validateRadio();
        validateSelect();
        validateInput('#textarea');
        validateCheckbox();

        if (validateInput('#firstname') === true && validateInput('#lastname') === true && validateEmail() === true && validatePasswordLength() === true && validateRadio() === true && validateSelect() === true && validateInput('#textarea') === true && validateCheckbox() === true) {
            window.location.href = 'account.html';
            return false;
        } else {
            e.preventDefault();
        }
    });

    // Inlogg. Validera alla fält vid submit 
    $('.signin-form').submit((e) => {
        validateEmail();
        validatePasswordLength();

        if (validateEmail() === true && validatePasswordLength() === true) {
            window.location.href = 'welcome.html';
            return false;
        } else {
            e.preventDefault();
        }
    });

});