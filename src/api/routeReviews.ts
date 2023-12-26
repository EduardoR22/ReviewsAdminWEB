import axios from "axios";

export async function getProjects() {
  const url=`${process.env.NEXT_PUBLIC_API_URL}/api/v1/projects`;
  try {
    const res = await axios.get(url);
    if(res.status===200) return res.data.data.data;
    return res.statusText;
  } catch (error) {
    return 'Ocurrio un problema al consultar los proyectos!!';
  }
}

export async function getIssues() {
  const url = `${process.env.NEXT_PUBLIC_API_URL}/api/v1/issuelists`;
  try {
    const res = await axios.get(url);
    if(res.status === 200) return res.data.data.data;
    return res.statusText;
  } catch (error) {
    return 'Ocurrio un problema al consultar los issues';
  }
}

export async function createReview(review:any) {
  const url = `${process.env.NEXT_PUBLIC_API_URL}/api/v1/reviews`;
  console.log('backkk')
  console.log(url);
  console.log(JSON.stringify(review));
  //const auth_token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1NjRlNDFmZDFkYzA5MDgwZmQ0YzlhMCIsImlhdCI6MTcwMzI1OTk4MSwiZXhwIjoxNzAzMzQ2MzgxfQ.N_EREYameNv4Gq2OKzkg9t4jjH1Jc55nWAjEKvE9xys';
  try {
    const res = await axios.post(url, JSON.stringify(review), {
      // headers: {
      //   'Authorization': `Bearer ${auth_token}`
      // }
    });
    if(res.status === 201) return res.status;
    return res.statusText;
  } catch (error) {
    return 'Ocurrio un problema al enviar review..';
  }
}