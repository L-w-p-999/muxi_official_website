// 组别介绍模板
import './groupStyle.scss'
import group from './const'


const GroupItem = (props: any) => {
  const item = group[props.data];
  return (
    <span>
        <div className="products-content">
          <div className="products-left">
            <div className="products-left-content">
              <h1>{item.name}</h1>
              <div>{item.intro}</div>
              <br />
              <div>
                <p>学习技能:</p>
                {item.learn}
              </div>
            </div>
          </div>
          <div
            className="products-right"
            style={{ backgroundImage: `url(${item.img})` }}
          />
        </div>
    </span>
  );
};

export default GroupItem 