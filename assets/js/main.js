const getByAxios =async()=>{
    const response = await axios.get("https://forkify-api.jonas.io/api/v2/recipes?search=pizza");
    const data= response.data;
    console.log(data);
}
getByAxios();