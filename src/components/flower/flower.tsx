import './flower.scss'
import React from 'react'

const rotateRandom = () => Math.floor(Math.random() * 361); // 随机角度生成 0 到 360 度

function Flower() {
    // 定义花瓣的位置和大小
    const leaves = [
        { left: '15%', top: '15%', size: '100%' },
        { left: '20%', top: '10%', size: '50%' },
        { left: '18%', top: '35%', size: '30%' },
        { left: '35%', top: '25%', size: '50%' },
        { left: '17%', top: '65%', size: '65%' },
        { left: '45%', top: '17%', size: '71%' },
        { left: '32%', top: '38%', size: '50%' },
        { left: '27%', top: '45%', size: '65%' },
        { left: '67%', top: '27%', size: '44%' },
        { left: '85%', top: '17%', size: '50%' },
        { left: '37%', top: '63%', size: '100%' },
        { left: '61%', top: '25%', size: '72%' },
        { left: '51%', top: '61%', size: '30%' },
        { left: '43%', top: '41%', size: '61%' },
        { left: '57%', top: '63%', size: '78%' },
        { left: '77%', top: '9%', size: '40%' },
        { left: '72%', top: '50%', size: '61%' },
        { left: '80%', top: '73%', size: '78%' },
    ];

    return (
        <div className="staticLeaves">
            {leaves.map((leaf, index) => (
                <span
                    key={index}
                    style={{
                        position: 'absolute',
                        left: leaf.left,
                        top: leaf.top,
                        backgroundSize: leaf.size,
                        transform: `rotate(${rotateRandom()}deg)`, // 随机旋转角度
                    }}
                ></span>
            ))}
        </div>
    );
}

export default Flower;
