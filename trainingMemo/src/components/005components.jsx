// componentsディレクトリ内にcomponentを作って保存していく。例Box.jsx

// propsを分割代入し、必要に応じてデフォルト値を設定する。
// 分割代入しない場合はpropsを引数におき、props.color等オブジェクトとして扱う
const Box = ({color = blue, num, bool, fn, obj, children}) =>{
    const clickEvent = () => alert('clicked!!!');
    return(
        <div className={`box ${color}`}>
            <h1>Title</h1>
            <ul>
                {/* エメット「ul>li{item-$}*5」 */}
                <li>item-1, {num}</li>
                <li>item-2, {bool ? 'true' : 'false'}</li>
                <li>item-3, {fn(3)}</li>
                <li>item-4, {obj.name + obj.age}</li>
                <li>item-5, {children}</li>
                {/* JavaScript挿入は{}を使う。文は不可。 */}
            </ul>
            <button onClick={clickEvent}>
                クリックイベントはclickEvent()の()はつけない。関数の実行はしない
            </button>
                {/* onChangeは内容が変更されたら発火 */}
                {/* onChange={(e)=>console.log(e.target.value)}とすると内容変更されるたびにinputの内容をeで取得できる */}
                {/* onFocusはinputにカーソルが当たったら発火 */}
                {/* onBlurはinputからカーソルが外れたら発火 */}
                {/* onMouseEnterはホバーインで発火 */}
                {/* onMouseLeaveはホバーアウトで発火 */}
        </div>
    )
}

export {Box}
