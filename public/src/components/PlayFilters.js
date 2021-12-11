import React from "react";
import { Form, Input, Button, Space, Select, Switch, Typography } from 'antd';

const { Title } = Typography;

const PlayFilters = (props) => {
    const [form] = Form.useForm();
    const [genre, setGenre] = React.useState("");
    const [before, setBefore] = React.useState(false);
    const [after, setAfter] = React.useState(false);

    const handleFilterClick = () => {
        // get values from input elements
        // changing these to use state breaks things that i don't want to deal with
        const title = document.getElementById("title").value; 
        const beforeYear = document.getElementById("beforeYear").value;
        const afterYear = document.getElementById("afterYear").value;

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
        form.resetFields();
        
        //remove filters from plays
        props.setFilteredPlays({}, null, true);
    }
    
    
    return (
        <div className="play-filters">
            <Title level={2}>Play Filters</Title>
            <Form layout="vertical" form={form}>
                <Form.Item label="Title" name="title">
                    <Input id="title" type="text"/>
                </Form.Item>
                <Title level={3}>Year</Title>
                <Form.Item label="Before" name="before">
                    <Space>
                    <Switch type="checkbox" onChange={e => setBefore(e)}/>
                    <Input id="beforeYear" type="text"/>
                    </Space>
                </Form.Item>
                <Form.Item label="After" name="after">
                    <Space>
                        <Switch type="checkbox" onChange={e => setAfter(e)}/>
                        <Input id="afterYear" type="text"/>
                    </Space>
                </Form.Item>
                <Form.Item label="Genre" name="genre">
                    <Select onChange={e => setGenre(e)}>
                        {props.genres.map((g, i) => 
                            <Select.Option key={i} value={g}>{g}</Select.Option>                          
                        )}
                    </Select>
                </Form.Item>
                <Form.Item>
                    <Space>
                        <Button type="primary" htmlType="submit" onClick={handleFilterClick}>Filter</Button>
                        <Button type="reset" onClick={handleClearClick}>Clear</Button>
                    </Space>
                </Form.Item>
            </Form>
        </div>
    );
};

export default PlayFilters