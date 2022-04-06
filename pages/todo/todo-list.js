import React, { useState } from "react";

export default function TodoList(){
    return(<>
        <div className="Todo">
            <input type="checkbox" id="todo0" name="todo0" value="todo0"/>
            <label htmlFor="">Todo 컴포넌트 만들기</label>    
        </div>
        </>
    );
}