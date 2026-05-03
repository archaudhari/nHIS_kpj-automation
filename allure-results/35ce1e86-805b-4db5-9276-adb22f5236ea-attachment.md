# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: api\login.api.spec.ts >> Validate KPJ Login API
- Location: tests\api\login.api.spec.ts:4:5

# Error details

```
Error: expect(received).toHaveProperty(path, value)

Expected path: "success"
Received path: []

Expected value: true
Received value: "·
<style>·
    .p-l-0 {·
        padding-left: 0px !important;·
    }···
    .p-r-0 {·
        padding-right: 0px !important;·
    }···
    .b-l-r-t {·
        border-left: 0px !important;·
        border-right: 0px !important;·
        border-top: 0px !important;·
    }···
    .login-page {·
        padding-bottom: 0px !important;·
    }···
    html, body {·
        padding-bottom: 0px !important;·
    }···
    .left-form {·
        height: auto !important;·
        width: 80% !important;·
        margin-left: 10% !important;·
        margin-top: 10%;·
    }·····
    img.img-responsive {·
        width: 70%;·
    }···
    .login-box1 {·
        border-radius: 4px !important;·
        padding: 15px 15px 1px !important;·
        margin-top: 0% !important;·
        box-shadow: none !important;·
        border: 1px solid #bcb8b8;·
    }···
    .welcome_login h3 {·
        text-align: left !important;·
        font-size: 29px !important;·
        font-weight: bold !important;·
        line-height: 2 !important;·
    }···
    .welcome_login h5 {·
        text-align: left !important;·
        font-size: 19px !important;·
    }···
    /*.login_form_resize {·
        padding: 15px 130px 15px 130px !important;·
    }*/···
    .form-horizontal .form-group {·
        position: relative !important;·
    }···
    .form-control {·
        border-radius: 0 !important;·
        box-shadow: none !important;·
        border-color: #c3c3c3 !important;·
        border-bottom: 2px solid #c3c3c3 !important;·
    }···
    .right-img img {·
        width: 100% !important;·
        height: 100% !important;·
    }···
    .right-img {·
        background: #0e4e72 !important;·
        padding: 0px !important;·
        margin: 0px !important;·
        height: 100% !important;·
    }···
    input:-internal-autofill-selected {·
        appearance: none;·
        background-image: none !important;·
        background-color: #FFF !important;·
        color: inherit !important;·
    }·
</style>·
<html>·
<head>·
    <meta charset=\"utf-8\">·
    <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\">·
    <title>HMS Login</title>·
    <!-- Tell the browser to be responsive to screen width -->·
    <meta content=\"width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no\" name=\"viewport\">·
    <!-- Bootstrap 3.3.5 -->·
    <link rel=\"stylesheet\" href=\"../../Contents/css/external/bootstrap.min.css\">·
    <link href='../../contents/css/internal/Login-Forgot-Thomson.css' rel=\"stylesheet\" />···
    <link rel=\"stylesheet\" href=\"../../Contents/css/external/bootstrap.min.cusmos.css\">·
    <!-- Font Awesome -->·
    <link rel=\"stylesheet\" href=\"/Contents/css/external/font-awesome.min.css\">·
    <link rel=\"stylesheet\" href=\"/Contents/css/external/ionicons.min.css\">·
    <link rel=\"stylesheet\" href=\"/Contents/dist/css/AdminLTE.min.css\">·
    <link rel=\"stylesheet\" href=\"/Contents/css/internal/AdminLTE.min.css\">·
    <link href=\"/Contents/css/external/validationEngine_jquery.css\" rel=\"stylesheet\" />·
    <!--<link rel=\"stylesheet\" href=\"../../plugins/iCheck/square/blue.css\"> -->·
    <!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->·
    <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->·
    <!--[if lt IE 9]>·
        <script src=\"https://oss.maxcdn.com/html5shiv/3.7.3/html5shiv.min.js\"></script>·
        <script src=\"https://oss.maxcdn.com/respond/1.4.2/respond.min.js\"></script>·
    <![endif]-->·····
    <script src=\"../../Contents/plugins/jQuery/jQuery-2.1.4.min.js\"></script>·
    <script src=\"/Contents/js/external/angular.min.js\"></script>·
    <script src=\"/vendor/angular-ui-router/release/angular-ui-router.min.js\"></script>·
    <script type=\"text/javascript\">·
        function preventBack() { window.history.forward(); }·
        setTimeout(\"preventBack()\", 0);·
        window.onunload = function () { null };···
    </script>·····
    <style>·
        .company_logo_login {···
            background: url('/Contents/images/KPJ_logo.png');·····
        }···
        .right-img {·
            background: url('/Contents/images/KPJ-Hospital.png') !important;·
            height: 100% !important;·
            background-repeat: no-repeat !important;·
            background-size: cover !important;·
            background-position: center !important;·
            margin-top: -40px !important;·
        }·
    </style>·
</head>·····
<body class=\"hold-transition login-page\">·
    <div class=\"container-fluid\" ng-app=\"loginModule\">·
        <div class=\"row\">·
            <div class=\"col-lg-8 col-md-8 col-sm-12 col-xs-12 p-l-0 p-r-0\">·
                <div class=\"right-img\">·
                </div>·
            </div>·
            <div class=\"col-lg-4 col-md-4 col-sm-12 col-xs-12\" style=\"border-right:1px solid #0e4e72 !important;\">·
                <div class=\"left-form\">·
                    <div class=\"company_logo_login\">·
                    </div>·
                    <div class=\"form-horizontal login-box1 ng-scope\" ng-controller=\"loginController\">·
                        <div class=\"welcome_login\">·
                            <h5>Sign in to continue</h5>·
                        </div>·
                        <div class=\"login_form_resize\">·
                            <div class=\"form-group\">·
                                <div class=\"col-sm-12\">·
                                    <div class=\"input-group\">·
                                        <span class=\"input-group-addon\" style=\"border-top: 0px; border-left: 0px; border-bottom: 2px solid #ccc; background: #ffffff;\"><i class=\"glyphicon glyphicon-user\"></i></span>·
                                        <input type=\"text\" class=\"form-control validate[cutom[required]] b-l-r-t\" ng-blur=\"getLocations()\" name=\"Username\" id=\"Username\" ng-model=\"loginid\" placeholder=\"Login Name\">···········································
                                    </div>·
                                </div>·
                            </div>·
                            <div class=\"form-group\">·
                                <div class=\"col-sm-12\">·
                                    <div class=\"input-group\">·
                                        <span class=\"input-group-addon\" style=\"border-top: 0px; border-left: 0px; border-bottom: 2px solid #ccc; background: #ffffff;\"><i class=\"glyphicon glyphicon-lock\"></i></span>·
                                        <input type=\"password\" ng-model=\"password\" ng-blur=\"getLocations()\" class=\"form-control validate[required] b-l-r-t\" name=\"Password\" id=\"Password\" placeholder=\"Password\">·
                                    </div>·
                                </div>·
                            </div>·
                            <div class=\"form-group\" ng-show=\"isLocationnotReqiured==0\">·
                                <div class=\"col-sm-12\">·
                                    <div class=\"input-group\">·
                                        <span class=\"input-group-addon\" style=\"border-top: 0px; border-left: 0px; border-bottom: 2px solid #ccc;\"><i class=\"glyphicon glyphicon-map-marker\"></i></span>·
                                        <select class=\"form-control placeholder validate[required] b-l-r-t\" id=\"LocationID\" name=\"LocationID\" ng-model=\"LocationID\" ng-options=\"item.value as item.text  for item in drpLocationList\" ng-change=\"getCashCounter()\">·
                                            <option value=\"\">-Select Organization/Department-</option>·
                                        </select>·
                                    </div>·
                                </div>·
                            </div>·
                            <div class=\"form-group\" ng-hide=\"isoutpatientfacilities==1\">·
                                <div class=\"col-sm-12\">·
                                    <div class=\"input-group\">·
                                        <span class=\"input-group-addon\" style=\"border-top: 0px; border-left: 0px; border-bottom: 2px solid #ccc;\"><img src=\"/Contents/images/cash_counter.png\"></span>·
                                        <select class=\"form-control placeholder validate[required] b-l-r-t\" id=\"CashCounterID\" name=\"CashCounterID\"·
                                                ng-blur=\"fnSetCashCounter();\"·
                                                ng-model=\"CashCounterID\" ng-options=\"item.value as item.text  for item in drpCashCounterList\"·
                                                ng-init=\"CashCounterID = drpCashCounterList[0].value\">·
                                            <option value=\"\">-Select Login Cash Counter-</option>·
                                        </select>·
                                    </div>·
                                </div>·
                            </div>·
                            <div class=\"form-group\" ng-show=\"showlanguage==true\">·
                                <div class=\"col-sm-12\">·
                                    <div class=\"input-group\">·
                                        <span class=\"input-group-addon\" style=\"border-top: 0px; border-left: 0px; border-bottom: 2px solid #ccc;\"><i class=\"fa fa-language\" aria-hidden=\"true\"></i></span>·
                                        <select class=\"form-control placeholder b-l-r-t\" ng-model=\"languageId\" name=\"languageId\" id=\"languageId\" ng-options=\"item.languageId as item.Language  for item in drpLanguageList\">·
                                            <option value=\"\">-Select Language-</option>·
                                        </select>·
                                    </div>·
                                </div>·
                            </div>·
                            <div class=\"form-group\">·
                                <div class=\"col-sm-12\">·
                                    <button type=\"button\" ng-click=\"fnLogin();\" class=\"btn btn-primary center-block btn-flat login-btn-login\">Login</button>·
                                    <div class=\"forgot text-center forgot-pass\"><a href=\"/Account/ForgotPassword\">Forgot Password?</a></div>·
                                </div>·
                            </div>·
                        </div>·
                    </div>·
                </div>·
                <div class=\"col-lg-12\">·
                    <div class=\"sancy-comapny_logo\">·
                    </div>·
                </div>·
            </div>···
        </div>·
    </div>·
    <footer class=\"navbar-fixed-bottom\">·
        <div class=\"\">·
            <div class=\"col-lg-8 text-left\">·
                <p class=\"\">E-mail : info@sancyberhad.com  | All Rights Reserved &copy SANCY BERHAD. 2024</p>·
            </div>·
            <div class=\"col-lg-4 text-right\">···················
            </div>·················
        </div>·
    </footer>·
    <!--<script src=\"../../plugins/jQuery/jQuery-2.1.4.min.js\"></script>·
        <script src=\"../../bootstrap/js/bootstrap.min.js\"></script>·
        <script src=\"../../plugins/iCheck/icheck.min.js\"></script> -->·
    <!--<script>·
         $(function () {·
           $('input').iCheck({·
             checkboxClass: 'icheckbox_square-blue',·
             radioClass: 'iradio_square-blue',·
             increaseArea: '20%'·
           });·
         });·
       </script> -->·
    <script>·
        var res = \"\";·····
        if(!(res==null || res==undefined))·
        {·
            if(res==\"0\")·
            {·
                alert('Incorrect username and/or password');·
            }·
            if(res==\"1\")·
            {·
                alert('\"The CAPTCHA you entered is invalid');·
            }·
        }·
        var resView = ;···
        // if ((resView != null && resView != undefined)) {·
        if (resView == \"1\") {·
            alert('User Already Logged in');·
        }·
        // }·
    </script>·
    <script src=\"/App/LoginController.js\"></script>···
    <script src=\"/Contents/js/external/jquery_validationEngine.js\"></script>·
    <script src=\"/Contents/js/external/jquery_validationEngine-en.js\"></script>···········
</body>···········
</html>···
"
```

# Test source

```ts
  1 | import { test, expect } from '@playwright/test';
  2 | import { loginAPI } from './auth.api';
  3 | 
  4 | test('Validate KPJ Login API', async () => {
  5 |   const response = await loginAPI();
  6 | 
  7 |   expect(response.status).toBe(200);
> 8 |   expect(response.data).toHaveProperty('success', true);
    |                         ^ Error: expect(received).toHaveProperty(path, value)
  9 | });
```