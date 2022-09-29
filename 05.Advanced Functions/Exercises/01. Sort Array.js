function sort(array, order){
    if (order === 'asc'){
        array.sort((a,b) => a-b);
    }else{
        array.sort((a,b) => b-a);
    }
    // console.log(array)
    return array;
}
sort([14,7,17,6,8],'asc');
sort([14,7,17,6,8],'desc');
