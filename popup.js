
document.getElementById('btn').addEventListener('click', fun);

// window.localStorage.getItem('ar');


// var ar = [];
// var x = 0;
// function add() {
//     x++;
//      //take value from the user and store in a
//      var a = document.getElementById("txt_inp").value;
//      console.log(a);
     
//      window.localStorage.setItem(`ar${x}`, a);
//      //make input colum blank
//      document.getElementById("txt_inp").value = "";
//      //create element to store values
//      var lii = document.createElement("li");
//      //store elemnet in the new value
//      var b = document.getElementById("list")
//      lii.innerHTML = localStorage.ar;
//      b.appendChild(lii);            
//      console.log(b);
//      //create button to delete
//      var btn = document.createElement("button");
//      btn.innerHTML = "x";
//      btn.onclick = del = () =>{
//          b.removeChild(lii);
//          b.removeChild(btn);
//          localStorage.removeItem(ar);
//      };
//      b.appendChild(btn);
// }
// for(let i = 0; i <=ar.length; ar++){
//     console.log(window.localStorage.getItem(`ar${i}`));
// }

var arr = [];
        var j = window.localStorage.getItem(`flag`);
        var pl = document.getElementById('list');
        
        j++
        for(let i = 1; i<=j; i++){
            var a = window.localStorage.getItem(`arr[${i}]`)
            if( a != null ){
                var li = document.createElement("li");
                li.innerText = window.localStorage.getItem(`arr[${i}]`);
                pl.appendChild(li);
                var new_dlt = document.createElement("button");
                new_dlt.innerText="x";
                new_dlt.onclick = del = () =>{
                    pl.removeChild(li);
                    pl.removeChild(new_dlt);
                    window.localStorage.removeItem(`arr[${i}]`);
                };
                new_dlt.className = 'cros';
                pl.appendChild(new_dlt);
                console.log(i);
            }

            
        }
        // j++
        console.log(j);
        function fun() {

            window.localStorage.setItem('flag', `${j++}`);
            var valu = document.getElementById("txt_inp").value;
            
            window.localStorage.setItem( `arr[${j}]`, valu );
            console.log(valu)
            var new_li = document.createElement("li");
            var new_dlt = document.createElement("button");
            new_dlt.innerText="x";
            new_dlt.onclick = del = () =>{
                pl.removeChild(new_li);
                pl.removeChild(new_dlt);
                window.localStorage.removeItem(`arr[${j}]`);
            };
            new_dlt.className = "cros";
            // new_dlt.addEventListener("click", dlte(j)); 
            new_li.innerHTML = valu;
            pl.appendChild(new_li);
            pl.appendChild(new_dlt);
        }
        
