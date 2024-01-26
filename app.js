//TODO:list of possible reps;UI friendly

//variables of elements
$(document).ready(function () {
  const weightInput = $("#weight");
  const repsInput = $("#reps");
  const calcButton = $("#calc");
  const para = $("#para");
  const index = $("#index");
  const count = $("#count");
  const checkBox = $("#var1");
  const checkBox2 = $("#var2");
  const container = $("#container");
  const darkModeButton = $("#darkmode__button");
  const switcher = $("#switch");
  const contentDiv = $("#content");

  //darkmode

  darkModeButton.text("Dark Mode").val("dark");

  darkModeButton.on("click", function () {
    if ($(this).val() === "dark") {
      container.add(weightInput).add(repsInput).add(calcButton).add(para).add(index).add(count)
        .add(darkModeButton).add(switcher).addClass("dark");
      darkModeButton.text("Light Mode").val("light");
    } else if ($(this).val() === "light") {
      container.add(weightInput).add(repsInput).add(calcButton).add(para).add(index).add(count)
        .add(darkModeButton).add(switcher).removeClass("dark");
      darkModeButton.text("Dark Mode").val("dark");
    }
  });

  contentDiv.val("row");

  switcher.on("click", function () {
    if (contentDiv.val() === "row") {
      contentDiv.css("flex-direction", "row-reverse").val("row-reversed");
    } else {
      contentDiv.css("flex-direction", "row").val("row");
    }
  });

  repsInput.on("keydown", function (e) {
    if (e.key === "ArrowRight") {
      e.preventDefault();
      weightInput.focus();
    }
  });

  weightInput.on("keydown", function (e) {
    if (e.key === "ArrowLeft") {
      e.preventDefault();
      repsInput.focus();
    }
  });

  checkBox.on("change", function () {
    if ($(this).prop("checked")) {
      checkBox2.prop("checked", false);
      index.text("kg");
      para.text("");
      count.text("");
    }
  });

  checkBox2.on("change", function () {
    if ($(this).prop("checked")) {
      checkBox.prop("checked", false);
      index.text("lbs");
      para.text("");
      count.text("");
    }
  });

  $(document).on("DOMContentLoaded", function () {
    checkBox.prop("checked", !checkBox2.prop("checked"));
    index.text("kg");
  });

  //calculator

  calcButton.on("click", function () {
    if (checkBox.prop("checked")) {
      if (weightInput.val() !== "" && repsInput.val() !== "" && weightInput.val() > 0 && repsInput.val() > 0 && repsInput.val() % 1 === 0) {
        if (repsInput.val() <= 1) {
          para.text(weightInput.val());
          count.text("x1");
          weightInput.val("");
          repsInput.val("");
          weightInput.removeClass("active");
          repsInput.removeClass("active");
        } else {
          const answer = (repsInput.val() / 30 + 1) * weightInput.val();
          para.text(Math.round(answer));
          count.text("x1");
          weightInput.val("");
          repsInput.val("");
          weightInput.removeClass("active");
          repsInput.removeClass("active");
        }
      } else {
        if (weightInput.val() === "" || weightInput.val() < 0) {
          weightInput.addClass("active");
        } else {
          weightInput.removeClass("active");
        }
        if (repsInput.val() === "" || repsInput.val() < 0 || repsInput.val() % 1 !== 0) {
          repsInput.addClass("active");
        } else {
          repsInput.removeClass("active");
        }
      }
    } else {
      checkBox2.prop("checked", !checkBox.prop("checked"));
      if (weightInput.val() !== "" && repsInput.val() !== "" && weightInput.val() > 0 && repsInput.val() > 0 && repsInput.val() % 1 === 0) {
        if (repsInput.val() <= 1) {
          para.text(weightInput.val());
          count.text("x1");
          weightInput.val("");
          repsInput.val("");
          weightInput.removeClass("active");
          repsInput.removeClass("active");
        } else {
          const lbsReps = parseInt(repsInput.val());
          const lbsWeight = parseInt(weightInput.val());
          const answer = (lbsReps / 30 + 1) * lbsWeight;
          para.text(Math.round(answer));
          count.text("x1");
          weightInput.val("");
          repsInput.val("");
          weightInput.removeClass("active");
          repsInput.removeClass("active");
        }
      } else {
        if (weightInput.val() === "" || weightInput.val() < 0) {
          weightInput.addClass("active");
        } else {
          weightInput.removeClass("active");
        }
        if (repsInput.val() === "" || repsInput.val() < 0 || repsInput.val() % 1 !== 0) {
          repsInput.addClass("active");
        } else {
          repsInput.removeClass("active");
        }
      }
    }
  });

  //error

  weightInput.on("input", function () {
    weightInput.removeClass("active");
  });

  repsInput.on("input", function () {
    repsInput.removeClass("active");
  });

  weightInput.on("input", function () {
    if (weightInput.val().length > 4) {
      weightInput.val(weightInput.val().slice(0, 4));
    }
  });

  repsInput.on("input", function () {
    if (repsInput.val().length > 4) {
      repsInput.val(repsInput.val().slice(0, 4));
    }
  });
});

//last edit: 26.1.2024

