document.addEventListener("DOMContentLoaded", () => {
  const dataModalEl = document.getElementById("dataModal");

  dataModalEl.addEventListener("show.bs.modal", event => {
    const button = event.relatedTarget;
    if (!button) return;

    const majorKey = button.getAttribute("data-major");
    const data = window.majorData?.[majorKey];

    const titleEl = document.getElementById("dataModalLabel");
    const accordionEl = document.getElementById("accordionMajorInfo");

    if (!data) {
      titleEl.textContent = majorKey || "Major";
      accordionEl.innerHTML = "<p>Course data not found for this major.</p>";
      console.log("Missing majorData entry:", majorKey);
      return;
    }

    titleEl.textContent = `Courses required for the ${data.title} are as follows:`;
    accordionEl.innerHTML = data.content;
  });
});