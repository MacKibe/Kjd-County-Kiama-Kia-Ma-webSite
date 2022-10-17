// class MyHeader extends HTMLElement {  
//     connectedCallback() {
//       this.innerHTML = `
//         <style>
//             header {

//             }
//         </style>
//         <header>
//             <h1>Kajiado County Kiama Kia Ma</h1>
//             <h2>Gikuyu Cultural Circumcision December 2022</h2>
//         </header>
//       `;
//     }
//   }
  
  customElements.define('myheader_', MyHeader);

  class MyFooter extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `
        <style>
            footer {

            }
        </style>
        <footer>
            <p>'ACIARI MARIRIKANE KUHOERA ACIANA IRUA'</p> 
        </footer>
      `;
    }
  }
  
  customElements.define('myfooter_', MyFooter);
