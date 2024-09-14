var _a;
(_a = document.getElementById("generateResumeBtn")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", function () {
    var _a;
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var education = document.getElementById("education").value;
    var experience = document.getElementById("experience").value;
    var skills = document.getElementById("skills")
        .value;
    var profilePic = (_a = document.getElementById("profilePic")
        .files) === null || _a === void 0 ? void 0 : _a[0];
    // Create a FormData object to handle file upload
    var formData = new FormData();
    formData.append("profilePic", profilePic || "");
    var reader = new FileReader();
    reader.onload = function (e) {
        var _a;
        var resumeContainer = document.getElementById("resumeContainer");
        var resumeContent = document.getElementById("resumeContent");
        if (resumeContainer && resumeContent) {
            resumeContainer.classList.remove("hidden");
            resumeContent.innerHTML = "\n                <div class=\"resume-header\">\n                    <img src=\"".concat((_a = e.target) === null || _a === void 0 ? void 0 : _a.result, "\" alt=\"Profile Picture\" class=\"profile-img\" />\n                    <h1>").concat(name, "</h1>\n                    <p>Email: ").concat(email, "</p>\n                    <p>Phone: ").concat(phone, "</p>\n                </div>\n                <div class=\"resume-body\">\n                    <section>\n                        <h2>Education</h2>\n                        <p>").concat(education, "</p>\n                    </section>\n                    <section>\n                        <h2>Work Experience</h2>\n                        <p>").concat(experience, "</p>\n                    </section>\n                    <section>\n                        <h2>Skills</h2>\n                        <p>").concat(skills, "</p>\n                    </section>\n                </div>\n            ");
        }
    };
    if (profilePic) {
        reader.readAsDataURL(profilePic);
    }
});
