(function() {
  var $form = $(".body__write");
  var $open = $(".footer__link");
  var $cancel = $(".write__cancel");
  var $inputName = $("#name");
  var $inputEmail = $("#email");
  var $area = $("#area");
  var $submit = $(".write__button");
  var $forma = $(".write__form");

  $open.on("click", function(evt) {
    evt.preventDefault();
    $form.removeClass("body__write--hide");
  });

  $cancel.on("click", function(evt) {
    evt.preventDefault();
    $form.addClass("body__write--hide");
  });

  $forma.on("submit", function(evt) {
    if ($inputName.val().length == 0) {
      evt.preventDefault();
      $inputName.css("border", "2px solid red");
    } else {
      $inputName.css("border", "none");
    }
    if ($inputEmail.val().length == 0) {
      evt.preventDefault();
      $inputEmail.css("border", "2px solid red");
    } else {
      $inputEmail.css("border", "none");
    }
  });

  $buttons = $(".slider-button");
  $button = $(".slider-button__item");
  $sliderCard = $(".slider__card");
  $sliderDesign = $(".design");
  $sliderMath = $(".math");
  $sliderTime = $(".time");

  $button.on("click", function(evt) {
    $sliderCard.addClass("visually-hidden");

    if ($button.hasClass("slider-button__item--checked")) {
      $button.removeClass("slider-button__item--checked");
    }

    $(evt.target).addClass("slider-button__item--checked");

    $buttonCheck = $(".slider-button__item--checked");

    switch ($buttonCheck.attr("id")) {
      case "1":
        $sliderDesign.removeClass("visually-hidden");
        break;
      case "2":
        $sliderMath.removeClass("visually-hidden");
        break;
      case "3":
        $sliderTime.removeClass("visually-hidden");
        break;
      default:
        $sliderDesign.removeClass("visually-hidden");
    }
  });
})();
