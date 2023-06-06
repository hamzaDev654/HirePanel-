import React from 'react'
import "./AboutUsItems.css";
export const AboutUsItems = (props) => {
  return (
    <div className='ant-row ant-row-space-between css-5scq2q'  style={{ marginLeft: "-8px", marginRight: "8px", rowGap: "16px" }}>



{
props.Contents.map(content=>{
    return <div className="ant-col ant-col-xs-24 ant-col-md-12 css-5scq2q"  key={content.id} style={{paddingLeft: '8px', paddingRight:' 8px'}}>
    <div className="ant-card ant-card-bordered ant-card-hoverable aboutCard css-5scq2q">
        <div className="ant-card-body">
            <div className="ant-card-meta">
                <div className="ant-card-meta-avatar">
                    {content.svg}
                </div>
                <div className="ant-card-meta-detail">
                    <div className="ant-card-meta-title">{content.title}</div>
                    <div className="ant-card-meta-description">
                    {content.para}
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
})


}


    </div>
  )
}
