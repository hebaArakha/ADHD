// Get id of doctores
const urlParams = new URLSearchParams(window.location.search);
const doctorId = parseInt(urlParams.get("id"));
let id;

// Array of all datat at doctors
let doctor = [
  {
    id: 1,
    name: " Amel Hussain ",
    titleJop: " Developmental Behavioral Pediatrician",
    description: ` Amel Hussain H Alawami , Developmental Behavioral Pediatrician with passion to help children with disabilities to reach their potentials and guide their parents through the journey.
                     Dr. Alawami has a strong background in pediatrics, with special interest in early intervention in all developmental disorders.   `,
    experience: [
      {
        title: `Developmental Behavior Pediatrician, Johns Hopkins Aramco Healthcare`,
        start: "2018",
        end: "Present",
      },
      {
        title: `General Pediatric Consultant, Saudi Aramco Medical Services, Dhahran, Saudi `,
        start: "2003",
        end: "2015",
      },
      {
        title: `General physician,  Saudi Aramco Medical Services, Dhahran, Saudi Arabia `,
        start: "1996",
        end: "2000",
      },
    ],

    education: [
      {
        title: ` Master’s in Public Administration, Suffolk university. Boston, Massachusetts`,
        start: "2016",
        end: "2018",
      },
      {
        title: `Leadership Education in Neurodevelopmental and Related Disabilities (LEND), University of Massachusetts, Worcester Massachusetts `,
        start: "2016",
        end: "2017",
      },
      {
        title: `Board Certification - Pediatrics, American Board of Pediatrics `,
        start: "2003",
        end: "Present",
      },
    ],

    residency: [
      {
        title: ` Developmental Behavior Pediatric Fellowship, Tufts Medical Center, Boston, Massachusetts, United States of America`,
        start: "2015",
        end: "2018",
      },
      {
        title: `Pediatric Residency, Baylor College of Medicine, Houston Texas, United States of America`,
        start: "2000",
        end: "2003",
      },
    ],
    medicalSchool: [
      {
        title: ` Medical school, MBBS, King Faisal University (currently Imam Abdulrahman University), Dammam, Saudi Arabia `,
        start: "1987",
        end: "1994",
      },
    ],

    img: "image/Doctors/1.jpg",
    socilMedia: "https://twitter.com/amel612",
  },
  {
    id: 2,
    name: "Ali Al-Saad",
    titleJop: "Consultant of adult psychiatry ",
    description: `Ali Al-Saad Consultant of adult psychiatry and subspecialty in the treatment of children, adolescents and their families, Board of the Royal College of Canada - I also work psychodynamic sessions, cognitive behavioral, family and marital sessions. - Interested in the diagnosis and treatment of developmental disorders such as hyperactivity, attention deficit, autism, sleep disorders, mood, anxiety and obsessive-compulsive disorder.  `,
    img: "image/Doctors/Ali.jpg",
    socilMedia: "https://www.sotwe.com/DrAlsaad1",
  },
  {
    id: 3,
    name: "Amal Alyamani",
    titleJop: "Director of Autism Center ",
    description: `Ali Al-Saad Consultant of adult psychiatry and subspecialty in the treatment of children, adolescents and their families, Board of the Royal College of Canada - I also work psychodynamic sessions, cognitive behavioral, family and marital sessions. - Interested in the diagnosis and treatment of developmental disorders such as hyperactivity, attention deficit, autism, sleep disorders, mood, anxiety and obsessive-compulsive disorder.  `,
    experience: [
      {
        title: `Director of Autism Center`,
        start: "2017",
        end: "",
      },

      {
        title: `Consultant Clinical Psychologist `,
        start: "2016",
        end: "",
      },
    ],
    img: "image/Doctors/AmalAlyamani.jpg",

    socilMedia: "https://sa.linkedin.com/in/amalalyamani",
  },

  {
    id: 4,
    name: "Afnan Almarshadi ",
    titleJop: "Consultant Psychiatrist",
    description: `Consultant Psychiatrist, Specialist in Child, Adolescent and Adult Psychiatry – University of Toronto/Canada Consultant Psychiatrist - Prince Sultan Military Medical City in Riyadh.  
      She holds a subspecialty in child and adolescent psychiatry from the University of Toronto, Canada, and a certificate in mental health leadership in the workplace from Queen’s University, Canada. 
      She holds a master’s degree in health systems management and evaluation, leadership and creativity from the University of Toronto - Canada. 
      Interested in developing mental health services provided to those in need, especially children and adolescents, and building a supportive work environment for health workers.
       `,
    img: "image/Doctors/Afnan.jpg",

    socilMedia: "https://twitter.com/dr_afnan12?lang=ar ",
  },
];

// Dispaly Doctor
if (doctorId === 1) {
  let selectedDoctor = doctor.find((doc) => doc.id === doctorId);

  if (selectedDoctor) {
    let doctorDetailsContainer = document.getElementById(
      "doctorDetailsContainer"
    );

    doctorDetailsContainer.innerHTML = `     
    <div class="row g-3">
    <!-- Images -->
    <div class="col-lg-6">
        <div class="doctor-info">
            <figure>
                <img src=${selectedDoctor.img} alt="">
            </figure>

            <!-- Conatact -->
            <div class="doctor-contcat p-4">
                <p>${selectedDoctor.description} </h5>

                <p><i class="fa-regular fa-envelope"></i> exam@gamil.com</p>
                <p><i class="fa-solid fa-location-dot"></i> Egypt</p>
                <div class="social-icons">
                    <a href=""><i class="fa-brands fa-facebook-f"></i></a>
                    <a href=""> <i class="fa-brands fa-linkedin"></i></a>
                    <a href=${
                      selectedDoctor.socilMedia
                    }><i class="fa-brands fa-twitter"></i></a>
                </div>
            </div>



        </div>
    </div>
    <!-- More Information  -->
    <div class="col-lg-6">
        <div class="doctor-information">
            <div class="titel-name">
                <h3>${selectedDoctor.name}</h3>
                <p>${selectedDoctor.titleJop} </p>
            </div>
            <!-- experience -->
            <div class="experience acv">
                <h4>Experience</h4>
                ${selectedDoctor.experience
                  .map(
                    (exp) => `
                <div class="item">
                    <div class="dot"></div>
                    <span class="date"> <i class="fa fa-calendar"></i> ${
                      exp.start
                    }-${exp.end || "Present"}</span>
                    <p>${exp.title}</p>
                </div>
                `
                  )
                  .join("")}

            </div>
            <!-- Education -->
            <div class="education acv">
                <h4>Education</h4>
                ${selectedDoctor.education
                  .map(
                    (edu) => `
                <div class="item">
                    <div class="dot"></div>
                    <span class="date"> <i class="fa fa-calendar"></i> ${
                      edu.start
                    }-${edu.end || "Present"}</span>
                    <p>${edu.title}</p>
                </div>
                `
                  )
                  .join("")}
            </div>
            <!-- Residency -->
            <div class="residency acv">
                <h4>Residency</h4>
                ${selectedDoctor.residency
                  .map(
                    (res) => `
                <div class="item">
                    <div class="dot"></div>
                    <span class="date"> <i class="fa fa-calendar"></i> ${
                      res.start
                    }-${res.end || "Present"}</span>
                    <p>${res.title}</p>
                </div>
                `
                  )
                  .join("")}
            </div>

            <!-- MedicalSchool -->
            <div class="medicalSchool acv">
                <h4>Medical School</h4>
                ${selectedDoctor.medicalSchool
                  .map(
                    (school) => `
                <div class="item">
                    <div class="dot"></div>
                    <span class="date"> <i class="fa fa-calendar"></i> ${
                      school.start
                    }-${school.end || "Present"}</span>
                    <p>${school.title}</p>
                </div>
                `
                  )
                  .join("")}
            </div>

        </div>

    </div>
</div>
`;
  } else {
    console.error("Doctor not found.");
  }
} else if (doctorId === 2 || doctorId === 4) {
  let selectedDoctor = doctor.find((doc) => doc.id === doctorId);

  if (selectedDoctor) {
    let doctorDetailsContainer = document.getElementById(
      "doctorDetailsContainer"
    );

    doctorDetailsContainer.innerHTML = `
 
    <div class="row">
    <!-- Images -->
    <div class="col-md-6">
        <div class="doctor-info">
            <figure>
                <img src=${selectedDoctor.img}  alt="">
            </figure>

            <!-- Conatact -->
            <div class="doctor-contcat p-4">
                <p>${selectedDoctor.description} </h5>

                <p><i class="fa-regular fa-envelope"></i> exam@gamil.com</p>
                <p><i class="fa-solid fa-location-dot"></i> Egypt</p>
                <div class="social-icons">
                    <a href=""><i class="fa-brands fa-facebook-f"></i></a>
                    <a href=""> <i class="fa-brands fa-linkedin"></i></a>
                    <a href=${selectedDoctor.socilMedia}><i class="fa-brands fa-twitter"></i></a>
                </div>
            </div>



        </div>
    </div>

</div>`;
  } else {
    console.error("Doctor not found.");
  }
} else if (doctorId === 3) {
  let selectedDoctor = doctor.find((doc) => doc.id === doctorId);

  if (selectedDoctor) {
    let doctorDetailsContainer = document.getElementById(
      "doctorDetailsContainer"
    );

    // Replace hardcoded values with dynamic values
    doctorDetailsContainer.innerHTML = `
    <div class="row">
    <!-- Images -->
    <div class="col-md-6">
        <div class="doctor-info">
            <figure>
                <img src=${selectedDoctor.img} alt="">
            </figure>

            <!-- Conatact -->
            <div class="doctor-contcat p-4">
                <p>${selectedDoctor.description} </h5>

                <p><i class="fa-regular fa-envelope"></i> exam@gamil.com</p>
                <p><i class="fa-solid fa-location-dot"></i> Egypt</p>
                <div class="social-icons">
                    <a href=""><i class="fa-brands fa-facebook-f"></i></a>
                    <a href=""> <i class="fa-brands fa-linkedin"></i></a>
                    <a href=${
                      selectedDoctor.socilMedia
                    }><i class="fa-brands fa-twitter"></i></a>
                </div>
            </div>



        </div>
    </div>
    <!-- More Information  -->
    <div class="col-md-6">
        <div class="doctor-information">
            <div class="titel-name">
                <h3>${selectedDoctor.name}</h3>
                <p>${selectedDoctor.titleJop} </p>
            </div>
            <!-- experience -->
            <div class="experience acv">
                <h4>Experience</h4>
                ${selectedDoctor.experience
                  .map(
                    (exp) => `
                <div class="item">
                    <div class="dot"></div>
                    <span class="date"> <i class="fa fa-calendar"></i> ${
                      exp.start
                    }-${exp.end || "Present"}</span>
                    <p>${exp.title}</p>
                </div>
                `
                  )
                  .join("")}

            </div>`;
  } else {
    console.error("Doctor not found.");
  }
}
