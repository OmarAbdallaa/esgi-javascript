var string ="hello world";

function ucfirst(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}
console.log(ucfirst('hello world'));

function capitalize(str)
{
 return str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
}
console.log(capitalize('hello world'));

function camelCase(str) {
    
    str = str.replace(/\w\S*/g, function(txt){
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
    str= str.replace(/\s+/g, '');
  }

console.log(camelCase("hello world"));

function snake_case(str)
{
 return str.replace(/ /g,"_", function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
}
console.log(snake_case('hello world'));

function leet(){ 
    var anaconda = "anaconda";
 
    var spt = anaconda.split('');
 
 
    for(i=0;i<spt.length;i++){
 
        switch(spt[i]){
            case "a":
            var regex = /a/gi;
            anaconda = anaconda.replace(regex,"4");
            break;
            case "e":
            var regex = /e/gi;
            anaconda = anaconda.replace(regex,"3");
            break;
            case "i":
            var regex = /i/gi;
            anaconda = anaconda.replace(regex,"1");
            break;
            case "o":
            var regex = /o/gi;
            anaconda = anaconda.replace(regex,"0");
            break;
            case "u":
            var regex = /u/gi;
            anaconda = anaconda.replace(regex,"_");
            break;
            case "y":
            var regex = /y/gi;
            anaconda = anaconda.replace(regex,"7");
            break;
        }
 
    }
    console.log(anaconda);
 }
 leet();
 