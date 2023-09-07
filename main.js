///////////////////
////Elmir
let countries = [
    { id: 1,
        image:
        'https://upload.wikimedia.org/wikipedia/commons/f/f3/Flag_of_Russia.svg',
        title:'Россия',
        year:1991,
        genre:'Страны Европы'
    },
    { id: 2,
        image:
        'https://upload.wikimedia.org/wikipedia/commons/b/ba/Flag_of_Germany.svg',
        title:'Германия',
        year:1871,
        genre:'Страны Европы'
    },
    { id: 3,
        image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSLcfrGwWqv-kFKWuvZ5ifm6VzQ-qnElutrReLU-9BD98Fud9LBNOp_5wQIrg&s=10',
        title:'Франция',
        year:843,
        genre:'Страны Европы'
    },
    { id: 4,
        image:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Flag_of_the_United_Kingdom_%281-2%29.svg/1200px-Flag_of_the_United_Kingdom_%281-2%29.svg.png',
        title:'Великобритания',
        year:1707,
        genre:'Страны Европы'
    },
    ////////////
    { id: 4,
        image:
        'https://upload.wikimedia.org/wikipedia/commons/a/a0/Flag_of_China_%28alternate%29.svg',
        title:'Китай',
        year:1949,
        genre:'Страны Азии'
    },
    { id: 4,
        image:
        'data:image/png;base64,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',
        title:'Индия',
        year:1947,
        genre:'Страны Азии'
    },

    { id: 4,
        image:
        'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPwAAACoCAMAAADzanO0AAAAclBMVEX///+8AC24ABO8ACu7ACi2AADx1Nm7ACa4ABa5ABq6ACG5ABznvMHqwMe4AA23AAn89Pbgoqv45+rFPVHVf4nDNUvPaXfVe4naiJXGRlbuydD57e/wz9XIT1/hqbDZjpbALkC/JTrdmqK+EjXScoDMW2xQqnmEAAADpklEQVR4nO3d2VKDMAAFUJNA2FqEAtqWbqL+/y8KZWo7DiBbmoTc8+gT15CVJH15AQAAAAAAAAAAAAAAAAAAAFiinB/269VqvT/wPJL9MM8T8Tg9fnj0l/dxTGNuwH+AFzvv1fMdxsgvxhy//OOx4LKfTiSeEho4D7EfMcejn+lB9jOKEZ0y6rcE//0H+GF2Wt77H50JtbqT1yxKzsuKH53d4J9Cfyj+wF1S/Jh4vaNf43vkJPuZZ8KTcFD0a/wwWUTTn9q96vpfjv0u+8kn22TemOgVN9vIfvppVo4zNntZ+M5K9vNPcbYH1/ZHzD7LTjDeVzgleiX8kp1hrDc6NTsh9E12inG+3enZy2bvW3aOMd5myV6m17Ds32d452tUuw6/mNzW3YWF7DTDrO35shNir2XnGWLTtmIxDrN0GuslE8Z1TZxEdqL+tjM19HfuVnamvvisFb5m6zLDzUbNYbvp8uLHM/Zyd2EsO1cfEZu1pb9hTId1ve3o1YtungZtXuQKKfiy6F31i34biMlOSKD8ykZkCSr46nuW6kUfzz6+uXNVb/BF9PE3ViY7XTc+2yy+CVV7mJf6IsP7qex8nYiw5q7CiOx8XcS+9Yq/94WwTr4WqLygtZt5EeMvZyc7YbuICq3yZaWn6o5zDq9isxPyqu6GpVjQhO7OU3eQJ7aXryjc0x8Ft3dli3eUnbHVRXB7V7Z4F9kZ2+T9t5uNDh/kslO22Age31Woqt9uRA9ur+FVHeDunxF+Lztli/Uzwqv6wXb1jPCq7k4zOrzRr73RDZ7RXZ3Rg5x82JGCMZin6vDW6ImN2VNaoxczjF7GMnoB0+ila6M/Wpj9ucroD5WiP1F/ys7XyejNCUZvSzF6Q5LZW9FEbkK0FB7h1FJx20/V33mcD78poB8WKruOcSdsy7na/VwtF1PrNajxFZOPmYjp65Xv42+MPlpm9KFCs4+Tzn6Q2FH1O00jk4+Qm315gNnXRph9YYjZV8WYfUlQWe+nXw+lYX2/KaZeDKbJbKbZ2ppyJZylWf/+1yYZ3ey5iVbjukYjr4G0bI3mMu14NuYC0EybOew/CmvYMQQWONqNaNvlaTjk0t8w1WChdoA8tfpe92wtLHolOiX0v+JnPl3iRd9XfPtJvdYr3q2AknQpzVwjXuxodbn/4+I+s6rL/d3kvOjktegQp8eLf/9ZB/9yTOPDQt/2RvmG1z/owTfLa98AAAAAAAAAAAAAAAAAAAAAKj/hxDuJUJxlcQAAAABJRU5ErkJggg==',
        title:'Япония',
        year: '660 до н. э.',
        genre:'Страны Азии'
    },

    { id: 4,
        image:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Flag_of_South_Korea.svg/2560px-Flag_of_South_Korea.svg.png',
        title:'Южная Корея',
        year:1948,
        genre:'Страны Азии'
    },
//////////
    { id: 4,
        image:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Flag_of_the_United_States.svg/800px-Flag_of_the_United_States.svg.png',
        title:'США',
        year:1776,
        genre:'Страны Северной Америки'
    },
    { id: 4,
        image:
        'https://flagof.ru/wp-content/uploads/2018/10/1200px-Flag_of_Canada_1964.svg_.png',
        title:'Канада',
        year:1867,
        genre:'Страны Северной Америки'
    },

    { id: 4,
        image:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Flag_of_Mexico.svg/800px-Flag_of_Mexico.svg.png',
        title:'Мексика',
        year:1810,
        genre:'Страны Северной Америки'
    },

    { id: 4,
        image:
        'data:image/png;base64,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',
        title:'Гренландия',
        year:1979,
        genre:'Страны Северной Америки'
    },
    //
    { id: 4,
        image:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Flag_of_Brazil.svg/800px-Flag_of_Brazil.svg.png',
        title:'Бразилия',
        year:1822,
        genre:'Страны Южной Америки'
    },
    { id: 4,
        image:
        'https://img.freepik.com/premium-vector/argentina-flag-flag-of-argentina-vector-illustration_685751-66.jpg',
        title:'Аргентина',
        year:1816,
        genre:'Страны Южной Америки'
    },
    { id: 4,
        image:
        'https://upload.wikimedia.org/wikipedia/commons/7/78/Flag_of_Chile.svg',
        title:'Чили',
        year:1818,
        genre:'Страны Южной Америки'
    },
    { id: 4,
        image:
        'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPwAAACoCAMAAADzanO0AAAAFVBMVEX/zQDIEC4AMIf/2gAAAJAAM47VCh6tIlPMAAAAi0lEQVR4nO3PSQGAAAAEofXsH9kWfgYasAEAAAAAAAAAAAAAAAAAAAAAAAAA8IcrbHfYzjD5Kvkq+Sr5Kvkq+Sr5Kvkq+Sr5Kvkq+Sr5Kvkq+Sr5Kvkq+Sr5qnb+CdsbtiNMvkq+Sr5Kvkq+Sr5Kvkq+Sr5Kvkq+Sr5Kvkq+Sr5Kvkq+Sr5Kvkq+6gN7c4jVRlGKJwAAAABJRU5ErkJggg==',
        title:'Колумбия',
        year:1810,
        genre:'Страны Южной Америки'
    },
 






   
]
/////////////////
///Adelia
let row = document.querySelector('.row')
let menuItems =document.querySelectorAll('.menu-item')
let status = 'Все'

const addMoviesRow = () => {
    Array.from(menuItems).forEach((item) => {
        item.style.color ='grey';
        if(item.textContent === status){
        item.style.color = 'red'
    }
    item.addEventListener('click', () => {
        status = item.textContent;
        addMoviesRow();
    });
    });
    row.innerHTML = ''

    countries.filter((item) => {
        if(status !== 'Все'){
            return item.genre === status
        }
        return item;
    }).forEach((item) => {
        row.innerHTML += `
        <div class="card">
        <img class="card-img" src="${item.image}" alt="movie"/>
        <h2 class="card-title">${item.title}<h2/>
        <p class="card-year">${item.year}</p>
        <h3 class="card-genre">${item.genre}</h3>
        </div>`//////
    })

};
addMoviesRow();

//light and dark
let body = document.querySelector('body')
let lightBtn = document.querySelector('.light-theme')
let darkBtn = document.querySelector('.dark-theme')

function lightTheme() {
    body.className = ''
}
function darkTheme() {
    body.classList.add('dark')
}
lightBtn.addEventListener('click', lightTheme)
darkBtn.addEventListener('click', darkTheme)
/////////////////////
///Baisal
var setVanta = ()=>{
    if (window.VANTA) window.VANTA.RINGS({
      el: ".fon",
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      scale: 1.00,
      scaleMobile: 1.00,
      backgroundAlpha: 0.13
    })
    }
    document.addEventListener('DOMContentLoaded', function () {
        setVanta();
        window.edit_page.Event.subscribe("Page.beforeNewOneFadeIn", setVanta);
    });
    ////////////////