//This directive animates the three cards on home page.
app.directive('animateBoxes', function () {
    return ({
        restrict: 'C',
        link: function (scope, element, attributes) {
            $(document).ready(function () {
                var animateLeftSide = 'animated zoomInLeft';
                var animateRightSide = 'animated zoomInRight';
                var animateMiddle = 'animated zoomInDown';
                var endOfAnimate = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
                $('.first').addClass(animateLeftSide).one(endOfAnimate, function () {
                    $(this).removeClass(animateLeftSide);
                });
                $('.second').addClass(animateMiddle).one(endOfAnimate, function () {
                    $(this).removeClass(animateMiddle);
                });
                $('.third').addClass(animateRightSide).one(endOfAnimate, function () {
                    $(this).removeClass(animateRightSide);
                });
            });
        }
    });
});

//This directive animates landing page button.
app.directive('animateButtonIn', function () {
    return ({
        restrict: 'C',
        link: function (scope, element, attributes) {
            var slideUpIn = 'animated fadeInUpBig';
            var endOfAnimate = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
            $(document).ready(function () {
                $('button').addClass(slideUpIn).one(endOfAnimate, function () {
                    $(this).removeClass(slideUpIn);
                });
            });
        }
    });
});

//This directive animates text on landing page.
app.directive('animateTextIn', function () {
    return ({
        restrict: 'C',
        link: function (scope, element, attributes) {
            var slideUpOut = 'animated fadeInDownBig';
            $(document).ready(function () {
                $('.intro-text').addClass(slideUpOut);
            });
        }
    });
});

//This directive animates try again div on home page.
app.directive('animateTryAgain', function () {
    return ({
        restrict: 'C',
        link: function (scope, element, attributes) {
            var slide = 'animated bounceInDown';
            $(document).ready(function () {
                $('.try-again-div').addClass(slide);
            });
        }
    });
});
