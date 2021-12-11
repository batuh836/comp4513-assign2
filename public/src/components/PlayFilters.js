import React from "react";
import { Form, Input, Button, Space, Select, Switch, Typography } from 'antd';

const { Title } = Typography;

const PlayFilters = (props) => {
    const handleFilterClick = () => {
        //get value from each input element
        const title = document.getElementById("title").value;
        const before = document.getElementById("before").checked;
        const beforeYear = document.getElementById("beforeYear").value;
        const after = document.getElementById("after").checked;
        const afterYear = document.getElementById("afterYear").value;
        const genre = document.getElementById("genre").value;
        
        //filter plays with input values
        props.setFilteredPlays({"title": title,
                                "before": before,
                                "beforeYear": beforeYear,
                                "after": after,
                                "afterYear": afterYear,
                                "genre": genre
                               }, null, true);
    }
    
    const handleClearClick = () => {
        //set input values to initial values
        document.getElementById("title").value = "";
        document.getElementById("before").checked = false;
        document.getElementById("beforeYear").value = "";
        document.getElementById("after").checked = false;
        document.getElementById("afterYear").value = "";
        document.getElementById("genre").value = "";
        
        //remove filters from plays
        props.setFilteredPlays({}, null, true);
    }
    
    
    return (
        <div className="play-filters">
            <Title level={2}>Play Filters</Title>
            <Form layout="vertical">
                <Form.Item label="Title" name="title">
                    <Input id="title" type="text"/>
                </Form.Item>
                <Title level={3}>Year</Title>
                <Form.Item label="Before" name="before">
                    <Space>
                    <Switch id="before" type="checkbox"/>
                    <Input id="beforeYear" type="text"/>
                    </Space>
                </Form.Item>
                <Form.Item label="After" name="after">
                    <Space>
                        <Switch id="after" type="checkbox"/>
                        <Input id="afterYear" type="text"/>
                    </Space>
                </Form.Item>
                <Form.Item label="Genre" name="genre">
                    <Select id="genre">
                        {props.genres.map((g, i) => 
                            <Select.option key={i} value={g}>{g}</Select.option>                          
                        )}
                    </Select>
                </Form.Item>
                <Form.Item>
                    <Space>
                        <Button type="primary" htmlType="submit" onClick={handleFilterClick}>Filter</Button>
                        <Button onClick={handleClearClick}>Clear</Button>
                    </Space>
                </Form.Item>
            </Form>
        </div>
    );
};

export default PlayFilters