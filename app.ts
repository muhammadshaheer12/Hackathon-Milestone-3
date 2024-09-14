document.getElementById("generateResumeBtn")?.addEventListener("click", () => {
  const name = (document.getElementById("name") as HTMLInputElement).value;
  const email = (document.getElementById("email") as HTMLInputElement).value;
  const phone = (document.getElementById("phone") as HTMLInputElement).value;
  const education = (
    document.getElementById("education") as HTMLTextAreaElement
  ).value;
  const experience = (
    document.getElementById("experience") as HTMLTextAreaElement
  ).value;
  const skills = (document.getElementById("skills") as HTMLTextAreaElement)
    .value;
  const profilePic = (document.getElementById("profilePic") as HTMLInputElement)
    .files?.[0];

  // Create a FormData object to handle file upload
  const formData = new FormData();
  formData.append("profilePic", profilePic || "");

  const reader = new FileReader();
  reader.onload = (e) => {
    const resumeContainer = document.getElementById("resumeContainer");
    const resumeContent = document.getElementById("resumeContent");

    if (resumeContainer && resumeContent) {
      resumeContainer.classList.remove("hidden");
      resumeContent.innerHTML = `
                <div class="resume-header">
                    <img src="${e.target?.result}" alt="Profile Picture" class="profile-img" />
                    <h1>${name}</h1>
                    <p>Email: ${email}</p>
                    <p>Phone: ${phone}</p>
                </div>
                <div class="resume-body">
                    <section>
                        <h2>Education</h2>
                        <p>${education}</p>
                    </section>
                    <section>
                        <h2>Work Experience</h2>
                        <p>${experience}</p>
                    </section>
                    <section>
                        <h2>Skills</h2>
                        <p>${skills}</p>
                    </section>
                </div>
            `;
    }
  };

  if (profilePic) {
    reader.readAsDataURL(profilePic);
  }
});
