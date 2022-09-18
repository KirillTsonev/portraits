//import checkNumInputs from "./checkNumInputs";
import {postData} from "../services/requests";

const forms = () => {
    const form = document.querySelectorAll("form");
    const inputs = document.querySelectorAll("input");
    const upload = document.querySelectorAll("[name='upload']");

    const message = {
        loading: "Loading",
        success: "Success",
        failure: "Failure",
        spinner: "assets/img/spinner.gif",
        ok :"assets/img/ok.png",
        fail :"assets/img/fail.png",
    };

    const path = {
        designer: "assets/server.php",
        question: "assets/question.php",
    };

    const clearInputs = () => {
        inputs.forEach(a => {
            a.value = "";
        });
        upload.forEach(a => {
            a.previousElementSibling.textContent = "File not chosen";
        });
    };

    upload.forEach(a => {
        a.addEventListener("input", () => {
            let dots;

            const arr = a.files[0].name.split(".");

            if (arr[0].length > 6) {
                dots = "...";
            } else {
                dots = ".";
            }

            const name = arr[0].substring(0, 6) + dots + arr[1];

            a.previousElementSibling.textContent = name;
        });
    });

    form.forEach(a => {
        a.addEventListener("submit", (e) => {
            e.preventDefault();

            let statusMessage = document.createElement("div");
            statusMessage.classList.add("status");
            a.parentNode.appendChild(statusMessage);

            a.classList.add("animate__animated", "animate__fadeOutUp");
            setTimeout(() => {
                a.style.display = "none";
            }, 400);

            let statusImg = document.createElement("img");
            statusImg.setAttribute("src", message.spinner);
            statusImg.classList.add("animate__animated", "animate__fadeInUp");
            statusMessage.appendChild(statusImg);

            let textMessage = document.createElement("div");
            textMessage.textContent = message.loading;
            statusMessage.appendChild(textMessage);

            const formData = new FormData(a);
            let api;
            if (a.closest(".popup-design") || a.classList.contains("calc-form")) {
                api = path.designer;
            } else {
                api = path.question;
            }

            postData(api, formData)
                .then(() => {
                    statusImg.setAttribute("src", message.ok);
                    textMessage.textContent = message.success;
                })
                .catch(() => {
                    statusImg.setAttribute("src", message.fail);
                    textMessage.textContent = message.failure;
                })
                .finally(() => {
                    clearInputs();
                    setTimeout(() => {
                        statusMessage.remove();
                        a.style.display = "block";
                        a.classList.remove("fadeOutUp");
                        a.classList.add("fadeInUp");
                    }, 5000);
                });
        });
    });
};

export default forms;