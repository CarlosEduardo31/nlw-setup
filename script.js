const form = document.querySelector("#form-habits")
const nlwSetup = new NLWSetup(form)
const button = document.querySelector("header button")

button.addEventListener("click", add)
form.addEventListener("change", save)

function add() {
  const today = new Date().toLocaleDateString("pt-br").slice(0, -5)
  const dayExists = nlwSetup.dayExists(today)

  if (dayExists) {
    alert("Dia já incluso 🔴")
    return
  }

  alert("Adicionado com sucesso ✅")
  nlwSetup.addDay(today)
}

function save() {
  localStorage.setItem("NLWSetup@habits", JSON.stringify(nlwSetup.data))
}

const data = JSON.parse(localStorage.getItem("NLWSetup@habits")) || {}
nlwSetup.setData(data)
nlwSetup.load()


const testimonials = [{
            name:"Carlos Eduardo 1",
            job: "Desenvolvedor Web",
            image:"https://carloseduardo31.github.io/Landing-Page-eaiTec/assets/png-transparent-robotics-robotics-cartoon-rover-robotics.png",
            testimonial: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni quisquam ea corporis quidem exercitationem, voluptate odio vero deleniti quo quam, nostrum modi impedit necessitatibus expedita maiores voluptas odit fugit tenetur?"

        },{
            name:"Carlos Eduardo 2",
            job: "Desenvolvedor Web",
            image:"https://carloseduardo31.github.io/Landing-Page-eaiTec/assets/png-transparent-robotics-robotics-cartoon-rover-robotics.png",
            testimonial: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni quisquam ea corporis quidem exercitationem, voluptate odio vero deleniti quo quam, nostrum modi impedit necessitatibus expedita maiores voluptas odit fugit tenetur?"

        },{
            name:"Carlos Eduardo 3",
            job: "Desenvolvedor Web",
            image:"https://carloseduardo31.github.io/Landing-Page-eaiTec/assets/png-transparent-robotics-robotics-cartoon-rover-robotics.png",
            testimonial: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni quisquam ea corporis quidem exercitationem, voluptate odio vero deleniti quo quam, nostrum modi impedit necessitatibus expedita maiores voluptas odit fugit tenetur?"

        },{
            name:"Carlos Eduardo 4",
            job: "Desenvolvedor Web",
            image:"https://carloseduardo31.github.io/Landing-Page-eaiTec/assets/png-transparent-robotics-robotics-cartoon-rover-robotics.png",
            testimonial: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni quisquam ea corporis quidem exercitationem, voluptate odio vero deleniti quo quam, nostrum modi impedit necessitatibus expedita maiores voluptas odit fugit tenetur?"

        },{
            name:"Carlos Eduardo 5",
            job: "Desenvolvedor Web",
            image:"https://carloseduardo31.github.io/Landing-Page-eaiTec/assets/png-transparent-robotics-robotics-cartoon-rover-robotics.png",
            testimonial: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni quisquam ea corporis quidem exercitationem, voluptate odio vero deleniti quo quam, nostrum modi impedit necessitatibus expedita maiores voluptas odit fugit tenetur?"

        }
    ]

        let i = 4;
        let j = testimonials.length;

        let testimonialContainer = document.getElementById("testimonial-container")
        let nextBtn = document.getElementById("next")
        let prevBtn = document.getElementById("prev")

        nextBtn.addEventListener("click", () => {
            i = (j + i + 1) % j;
            displayTestimonial();
            console.log(i)
        })

        prevBtn.addEventListener("click", () => {
            i = (j + i - 1) % j;
            displayTestimonial();
            console.log(i)
        })

        let displayTestimonial = () => {
            testimonialContainer.innerHTML = `
            <div class="card-img">
                <img src=${testimonials[i].image} />
            </div>
            <div class="card-descricao">
                <h3>${testimonials[i].name}</h3>
                <p>${testimonials[i].testimonial}</p>
            </div>
            `
        }

        window.onload = displayTestimonial;