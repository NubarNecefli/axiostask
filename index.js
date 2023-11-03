
const customer=document.getElementById('customer')


fetch('https://northwind.vercel.app/api/customers')
.then(res => res.json())
.then(data => {
data.forEach(item => {
  const p = document.createElement('p')
  p.textContent = `${item.name}`
customer.appendChild(p)
 })
})



btn.addEventListener('click', function () {

     fetch('https://northwind.vercel.app/api/customers', {
         method: "POST",
        headers: {
         "Content-Type": "application/json",
       },
     body: JSON.stringify({
       name: one.value,
   
     }),
      })
      .then((res) => res.json())
 .then((data) => {  
      console.log("data getdi" + data);
   });
})





function FetchDel() {
      let url = `https://northwind.vercel.app/api/customers/${ido.value}`;
    
     fetch(url, {
      method: "DELETE",
 }).then((res) => console.log(res));
    }
    
    btn.addEventListener('click', FetchDel)





    axios.get("https://northwind.vercel.app/api/customers/")
.then((res) => {
      console.log(res.data);
     });
    
    
    

     


     function fetchPost () {
            axios.post("https://northwind.vercel.app/api/categories/"{
                name: one.value
            }).then(res => {
                    console.log(res);
                 })
                 }
                
                
                btn.addEventListener('click', fetchPost)



                


const customerss = document.getElementById("customer");
const one = document.getElementById("one");
const btn = document.getElementById("btn");




function axiosDelete () {
axios.delete(`https://northwind.vercel.app/api/customers/${ido.value}`)
}
btn.addEventListener('click', axiosDelete)