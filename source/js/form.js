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

  pinHigh = document.querySelector(".filter__pin--high");
  filterLine = document.querySelector(".filter__line");
  filterLineSort = document.querySelector(".filter__line-sort");
  costHigh = document.querySelector(".cost__high");
  pinLow = document.querySelector(".filter__pin--low");
  costLow = document.querySelector(".cost__low");

  pinHigh.addEventListener("mousedown", function(evt) {
    evt.preventDefault();

    startCoords = {
      x: evt.clientX
    };

    var onMouseMove = function(moveEvt) {
      moveEvt.preventDefault();
      var shift = { x: startCoords.x - moveEvt.clientX };

      startCoords = { x: moveEvt.clientX };

      var newPosition = pinHigh.offsetLeft - shift.x;
      pinLow.style.left = 0 + "px";
      if (newPosition > filterLine.offsetWidth) {
        newPosition = filterLine.offsetWidth;
      } else if (newPosition + "px" < pinLow.style.left) {
        newPosition = pinLow.style.left;
      }
      pinHigh.style.left = newPosition + "px";
      filterLineSort.style.width = newPosition + "px";

      costHigh.value = Math.round(
        (pinHigh.offsetLeft / filterLine.offsetWidth) * 23000
      );
    };

    var onMouseUp = function() {
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseup", onMouseUp);
    };

    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseup", onMouseUp);
  });

  pinLow.addEventListener("mousedown", function(evt) {
    evt.preventDefault();

    startCoords = {
      x: evt.clientX
    };

    var onMouseMove = function(moveEvt) {
      moveEvt.preventDefault();
      var shift = { x: startCoords.x - moveEvt.clientX };

      startCoords = { x: moveEvt.clientX };

      var newPositionLow = pinLow.offsetLeft - shift.x;

      if (newPositionLow > pinHigh.offsetLeft) {
        newPositionLow = pinHigh.offsetLeft;
      } else if (newPositionLow < 0) {
        newPositionLow = 0;
      }

      pinLow.style.left = newPositionLow + "px";
      filterLineSort.style.left = newPositionLow + "px";

      console.log(filterLineSort.offsetWidth);
      filterLineSort.style.width = costLow.value = Math.round(
        (pinLow.offsetLeft / filterLine.offsetWidth) * 23000
      );
    };

    var onMouseUp = function() {
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseup", onMouseUp);
    };

    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseup", onMouseUp);
  });
})();
