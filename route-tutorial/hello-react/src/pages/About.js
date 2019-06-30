import React from 'react';
import queryString from 'query-string';

const About = ({location,match})=>{
    const query = queryString.parse(location.search);
    console.log(query)

    const {color} = query;
    const{ detail} = query.detail === 'true';

    return (
        <div>
            <h2 style={{color}}>소개</h2>
            <p>
                안녛아세요, 저는 {match.params.name} 입니다.
                {{detail} && ' blahblah'}
            </p>
        </div>
    );
}

export default About;