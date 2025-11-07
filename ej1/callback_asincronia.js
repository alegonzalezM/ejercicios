function taskAsync(callback){
    setTimeout(function(){
        console.log('Tarea asincronica 1 completada'); 
        callback()}, 3000)};
        console.log("Inicio de la tarea 1");
        taskAsync(function(){console.log("Fin de la tarea 1")})

function taskAsync2() { 
return new Promise(function (resolve, reject) { 
setTimeout(function() { 
if (Math.random() < 0.5) { 
resolve('Tarea asincrónica 2 completada.') 
} else { 
reject(new Error('Tarea asincrónica 2 fallida.')) //si random da mayor a 0.5
} 
}, 3000); 
}); 
}

async function ejAsyncAwait(){
    try{ const data= await taskAsync2();
        console.log( data )
    } catch (error) {
        console.log(error);
    }finally { console.log("Fin 3")}
    }
ejAsyncAwait();

async function executeAsyncTask () { 
console.log('Inicio de la tarea 4.'); 
try { 
const result = await taskAsync(); 
console.log(result); 
} catch (error) { 
console.log(error); 
} finally { 
console.log('Fin de la tarea.') 
} 
} 
executeAsyncTask(); 
    

const config = { 
method: 'POST', 
headers: { 
'Content-Type': 'application/json', 
'Authorization': 'Bearer token', 
}, 
body: JSON.stringify({ key: 'value' }), 
}; 
fetch('https://api.example.com/data', config) 
.then(response => response.json()) 
.then(data => console.log(data)) 
.catch(error => console.error('Error:', error)); 