import React from 'react';

export default function Table({ type, data }) {
    // console.log(type);
    console.log(data);
    return <table className={`${type}-Table`}></table>;
}
