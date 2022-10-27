import React from 'react';
import { Button } from "@arco-design/web-react";

export default class Home extends React.Component{
    setDarkTheme = ()=>{
        // 设置为暗黑主题
        document.body.setAttribute('arco-theme', 'dark');
    }
    setLightTheme = ()=>{
        // 恢复亮色主题
        document.body.removeAttribute('arco-theme');
    }
    render(){
        return <div>
            <Button onClick={this.setDarkTheme.bind(this)} type="primary">暗黑主题</Button>
            <Button onClick={this.setLightTheme.bind(this)} type="primary">亮色主题</Button>
        </div>
    }
    componentDidMount(){
        console.log(this.$props,'AAAAAAAAAAA')
    }
}