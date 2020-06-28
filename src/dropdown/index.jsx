import React, {Component} from 'react';
import './index.scss';
import Code from '../code';
import { Dropdown, Button, Icon } from '../components';

class Index extends Component {
    constructor (props) {
        super(props);
        this.state = {};
    }

    render () {
        return (
            <div className="demo demo--dropdown">
                <h1 className="demo-title">Dropdown 下拉块组件</h1>
                <div className="demo-description">
                  <p style={{color: "red"}}>debug 中...</p>
                </div>
                <div className="panel">
                    <h2 className="panel-title">演示</h2>
                    <div className="panel-content">
                        <div className="panel-line">
                            <Dropdown placement="left bottom">
                                <Dropdown.Menu>
                                    <Button disabled >左对齐</Button>
                                </Dropdown.Menu>
                                <Dropdown.Content>
                                    <div className="dropdown-content dropdown-content--long">
                                        <p>2016年8月，章宇和饶晓志导演参加完爱丁堡艺术节，从伦敦回北京的路上，喝光了飞机上能提供的所有小瓶威士忌和啤酒。章宇沉沉睡去。饶晓志为了克服恐机症，开始听他推荐那首尧十三的《瞎子》。随着歌声，饶晓志想起了家乡贵州的人与事，有了拍《无名之辈》的灵感。</p>
                                        <p>两人是贵州老乡，这是他们的第四次合作。章宇饰演一个抢钱的笨贼，他在角色身上看到了“理想主义者被现实击毙”的特点，觉得有戏可做。他给角色编了栩栩如生的故事：小时候捡到过一条死的眼镜蛇，却拿出去跟朋友们炫耀说是自己打死的，因此外号“眼镜”。“眼镜”喜欢翻看拼音版《水浒传》，这也是章宇精心设计的细节，用来体现人物的文化水平——甚至那本书都是他自己去淘宝买回来的。</p>
                                    </div>
                                </Dropdown.Content>
                            </Dropdown>

                            <Dropdown placement="center bottom">
                                <Dropdown.Menu>
                                    <Button disabled>中对齐</Button>
                                </Dropdown.Menu>
                                <Dropdown.Content>
                                    <div className="dropdown-content">
                                        我是内容<br />
                                        我是内容<br />
                                        我是内容
                                    </div>
                                </Dropdown.Content>
                            </Dropdown>

                            <Dropdown placement="right bottom">
                                <Dropdown.Menu>
                                    <Button disabled >右对齐</Button>
                                </Dropdown.Menu>
                                <Dropdown.Content>
                                    <div className="dropdown-content">
                                        我是内容<br />
                                        我是内容<br />
                                        我是内容
                                    </div>
                                </Dropdown.Content>
                            </Dropdown>

                            <Dropdown placement="center top">
                                <Dropdown.Menu>
                                    <Button disabled >覆盖</Button>
                                </Dropdown.Menu>
                                <Dropdown.Content>
                                    <div className="dropdown-content">
                                        我是内容<br />
                                        我是内容<br />
                                        我是内容
                                    </div>
                                </Dropdown.Content>
                            </Dropdown>
                        </div>
                    </div>
                    <div className="panel-content">
                        <div className="panel-litetitle">有<i>"角"</i>的</div>
                        <div className="panel-line">
                            <Dropdown placement="center bottom" arrow>
                                <Dropdown.Menu>
                                  <Button disabled ><Icon type="notify"></Icon></Button>
                                </Dropdown.Menu>
                                <Dropdown.Content>
                                    <div className="dropdown-content">
                                        我是内容<br />
                                        我是内容<br />
                                        我是内容
                                    </div>
                                </Dropdown.Content>
                            </Dropdown>
                        </div>
                    </div>
                </div>
                <div className="panel">
                    <h2 className="panel-title">代码展示</h2>
                    <div className="panel-content">
                        <Code>
                            {
                                `<Dropdown placement="center bottom">
    <Dropdown.Menu>
        <Button>中对齐</Button>
    </Dropdown.Menu>
    <Dropdown.Content>
        <div>
            我是内容<br />
            我是内容<br />
            我是内容
        </div>
    </Dropdown.Content>
</Dropdown>`
                            }
                        </Code>
                    </div>
                </div>
                <div className="panel">
                    <h2 className="panel-title">属性</h2>
                    <div className="panel-content">

                    </div>
                </div>
            </div>
        );
    }
}

export default Index;
