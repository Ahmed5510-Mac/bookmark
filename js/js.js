

 let bookmark;
 if(localStorage.getItem("book")==null)
 {
    bookmark=[];

 }
 else
 {
    bookmark=JSON.parse(localStorage.getItem("book"))
    displaysite();
 }

// ================add======================
 function addBookMark()
 {
    let site  =
    {
        name:siteNameInput.value,
        url:siteUrlInput.value
    };
    bookmark.push(site);

    localStorage.setItem("book",JSON.stringify(bookmark))
    displaysite()
    clear()
 }

// ===============display================

 function displaysite()
{
  
 let cont="";

 for(i=0 ;i<bookmark.length;i++)
 {

    cont+=

    `
        <tr>
            <td>${bookmark[i].name} </td>
            <td><button onclick="link()"  class =" btn btn-warning"> Vist </button> </td>
            <td> <button onclick=" Delete(${i})" class =" btn btn-danger"> Delete </button> </td>
        
        
        </tr>
    `

 }
 document.getElementById("tbbody").innerHTML=cont
 }


//  ===============clear======================
 function clear()
 {
    siteNameInput.value="";
    siteUrlInput.value="";
 }
//  ===============serchBookmark======================

 function serchBookmark()
 {
     let term =serchInput.value;
     let wintedBookMark=[];
     for(i=0;i<bookmark.length;i++)
     {
         if(bookmark[i].name.toLowerCase().includes(term.toLowerCase()))
         {
            wintedBookMark.push(bookmark[i]);
         }
     }
     
     let Box="";

     for(i=0;i<wintedBookMark.length;i++)
     {

        Box+=
         `<tr> 
                <td>${wintedBookMark[i].name} </td> 
                <td><button onclick="link()" class=" btn btn-warning"> Vist</button> </td>
                <td> <button onclick="Delete(${i})" class=" btn btn-danger"> Delete </button></td>
           </tr>
        `
       

     }
     document.getElementById("tbbody").innerHTML=Box;
 
 }

//  =============== Delte Bookmark======================
function Delete(index)
{
    bookmark.splice(index,1);
    localStorage.setItem("book",JSON.stringify(bookmark));
    displaysite();

} 

//  =============== Delte Bookmark======================
function link(index)
{   

}