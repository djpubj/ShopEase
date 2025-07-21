

function Check() {

}

function GetUserId() {
    let name="userId";
    const cookies = document.cookie.split('; ');
    for (let cookie of cookies) {
        const [key, value] = cookie.split('=');
        if (key === name) {
            return decodeURIComponent(value);
        }
    }
    return null;
}

function handleAddToCart(){
    if(GetUserId()===null){
        return null;
    }
    else{
        return 1;
    }
}

export  {GetUserId};
export default Check;