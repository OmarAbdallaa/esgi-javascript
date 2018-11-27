function type_check_v1(arg,type){
    if(type === "array"){
        return arg instanceof Array;
    }
    return typeof arg == type ;
}
function type_check_v2(arg1,enumera){
    if("type" in  enumera){
        var isArray = enumera ['type'] === 'array';
        if (isArray && !(arg1 instanceof Array)){
            return false;

        }else if (!isArray && typeof arg1 !== enumera['type']){
            return false ;
        }
    }


}