const fetchSchool = async (schoolName) => {
  try {
    const url = encodeURI(`https://port-0-kschool-backend-37y7e24l7jiwra5.gksl1.cloudtype.app/school?schoolName=${schoolName}`);
    const response = await fetch(url);
    const rawData = await response.json();

    if (rawData === null) return ;
    const data = rawData.data;

    if(!("schoolInfo" in data))
      return [];
    
    const schoolData = data["schoolInfo"][1]["row"];
    let schoolList = [];
    schoolData.forEach(school => {
      schoolList.push({
        schoolName: school.SCHUL_NM,
        cityProvince: school.ATPT_OFCDC_SC_CODE,
        schoolCode: school.SD_SCHUL_CODE,
        schoolAddress: school.ORG_RDNMA
      });
    });

    return schoolList;
  } catch(error) {
    console.error(error);
    return [];
  }
}

module.exports = fetchSchool;