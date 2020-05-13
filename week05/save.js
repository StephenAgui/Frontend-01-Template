var imgUrl = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAArkAAAFRCAYAAABwobXGAAAgAElEQVR4Xu2dCZgU1dX3T/UMDIgs7hqDxg03RKYGNO64xoVPMbxGUdG4RIWoaIRocDcBjaLivu/vK26AwT0xiAoqQteA+xYl4haigqOyznR9z7mZnvQ03dPVM7dO31v3X8/DA3Tfuvec3zl1+t+3b93yCAcIgAAIgAAIgAAIgAAIJIyAlzB/4A4IgAAIgAAIgAAIgAAIEEQukgAEQAAEQAAEQAAEQCBxBCByExdSOAQCIAACIAACIAACIACRixwAARAAARAAARAAARBIHAGI3MSFFA6BAAiAAAiAAAiAAAhA5CIHQAAEQAAEQAAEQAAEEkcAIjdxIYVDIAACIAACIAACIAACELnIARAAARAAARAAARAAgcQRgMhNXEjhEAiAAAiAAAiAAAiAAEQucgAEQAAEQAAEQAAEQCBxBCByExdSOAQCIAACIAACIAACIACRixwAARAAARAAARAAARBIHAGI3MSFFA6BAAiAAAiAAAiAAAhA5CIHQAAEQAAEQAAEQAAEEkcAIjdxIYVDIAACIAACIAACIAACELnIARAAARAAARAAARAAgcQRgMhNXEjhEAiAAAiAAAiAAAiAAEQucgAEQAAEQAAEQAAEQCBxBCByExdSOAQCIAACIAACIAACIACRixwAARAAARAAARAAARBIHAGI3MSFFA6BAAiAAAiAAAiAAAhA5CIHQAAEQAAEQAAEQAAEEkcAIjdxIYVDIAACIAACIAACIAACELnIARAAARAAARAAARAAgcQRgMhNXEjhEAiAAAiAAAiAAAiAAEQucgAEQAAEQAAEQAAEQCBxBCByExdSOAQCIAACIAACIAACIACRixwAARAAARAAARAAARBIHAGI3MSFFA6BAAiAAAiAAAiAAAhA5CIHQAAEQAAEQAAEQAAEEkcAIjdxIYVDIAACIAACIAACIAACELnIARAAARAAARAAARAAgcQRgMhNXEjhEAiAAAiAAAiAgCYCrJNCTX2hG2ECELnCwF0Zzvf9BZ06deo3e/bshmI+9+/ffyARdSrFZN68ea9wm9ra2uFE9FF9ff2rAwcO7N3U1NS/rXMbGhr++tFHH63Ib+P7/un8WhAENxY6f6eddlqnsbHx/5Wyi9+vqamZ9uqrr34bpS3agAAIgECSCPTv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iaiZMQZELkSuGZnYthW6a5wNPkPkFomSq8lgS9LqErmffPIJvfbaazRs2LCCri9evJjWWmutdmFBDrULW8VO0h0viNyKhVJ8YIhciFzxpGvHgLprXDtMqMgpUrUYyxU6GN4VK1bQ0qVL2y26Cg2/ZMkSmjZtGh133HHU2NhI6XTxYrXRRjHLaCgAACAASURBVBvRJptsQu+//z7xeTvvvHNLl2eddRadeOKJ1K9fP/XaFVdcQf3796cDDzywg15HO72ci3fRokVK2M6ePVv9zb689NJL1K1bt9UGY/G73XbbqT99+/alrbfeOppBht4MF9l4BxuWk0NR8EgV1ii2oE28BCByIXLjzTA9veuucXqsir8XqVoMkdvOWM6YMYMmT56sBCgL3V69etHdd99Nr776Kl111VWq15122oluueUWGjlypBJv//d//0fbbLPNaiM+/PDDdOWVV9Lvf/97OvLII2nlypV0zDHHqJnMgw46iO6880768ccfaY011iDP+0/I5syZQ++++y794Q9/oF/+8pf09ttv05lnnkn333+/Ov/DDz+kefPm0UcffUT/8z//Q//617/o9ttvpzFjxlCXLl2UQPzpT3/aTu+jnVbq4mWfsqL25ZdfJha6ucd9992nRGz+ke2XX+/evXuL4OXXd9lllzaNK2VTNM/kWnHucM5wbPMP/kLDX4I4Jziee++9Nx166KG0zjrrtGo6ceJEeuCBB2jSpEnUp08fOeM1jKQ7XlKFVYPr6KKDBCByIXI7mEIip+uucSJGaxhEqhZD5LYjWAsXLlTCkWdaWYyyWGORxiKDf0ZnUTpr1iy64447lDBlofLWW2/RfvvtRxdddFGrEcMwpKFDh9K///1vOv3005XI5YPFM8/E8owu98mC78UXX6Thw4fTk08+Sd9++60Sxdtuu21LfyxmvvzyS2Ubj589WEQPGTKEampqWl7bd999aYcddmiH99FPKXbxZoXt3/72N2VvsaPYDHauyM0/l2e1WfDtuuuuineuz9zWtoJSSuReeOGFaqaeZ7/vvfde2nTTTdUXq+yRyWTUzH3nzp1Vfp5zzjnRA2hAS93xkiqsBqBz3gSIXIhcGy4C3TXOBp9zP4tx41lOxExJhqeeeor++Mc/Es/m8qxo/sEzuvwez6rywUKFxcYbb7xBzz77LPXo0aPlFBYn5557Lm288cZ02GGHtYhcbvD666+r2WAWrMuWLaMgCOjRRx+ln/3sZ3TqqaeqPni5wvbbb6/+zTPK/If7X758OTU1NdEPP/xARx99tBLL2YMFT6dOnWK/FnLjxSKfmTz//PPEXxKiHO0Rubn9so/MZtCgQUrwMitTciiK/9ncaWsm95prrqHddttNdceztfxFh79w8ZcrPmbOnEljx45VOchfvjj/qqurow5f8Xa64wWRW/GQihkAkQuRK5ZsHRhId43rgCmip0rVYszkFgkri1IWqVOmTKHvv/9eiU1eGsDLEt555x01o3rTTTfRz3/+80git7a2lqZOnaoE57HHHttyDs/W9u7dW/1szzO6PJPLIpBneHksFqyHHHII7b///lRVVaWWQ7Ag5hnLL774Qs3QXXrpperffA6355/wf/Ob36j/569p/eyzz1R/vFY37qOtGde4xy7Vf1vrnEudK/l+qZncXJHLX5h++9vf0jPPPEPrr7++MpO/QPEXMZ7BPeCAA9S6bBb9thy6PwCkCqstfJNsp+siN8mxTaJvtnwm6WIvVYshcotEjH/6ZVHKApIFw7hx49T60BEjRqgzzj//fDUrefjhhytBmbsOstBMLgeUZ9C4T/7D6yg///xztZ6WhfSoUaPoiCOOUCL3lFNOUaJ18ODBdNpppylRetlllymRy7N1vMyAbyBjsc03nLGNvNRhwYIFalnCySefrGziZQv883Xu8cQTTyhbIXLtmOWIKnJXrVpFF1xwgVqnnZ21b2hoUML2uuuuUzckZpcqXH311brqVOz9QOTGjjixA0DkJja0iXQMIjeesELkFuG6zz77KCGY3YmAZ8l4XSwvF8gefPf/DTfcoNaV8o1Bv/rVr9RbxUQuv3/wwQerm8z4Bqlrr71WiVm+UY0FaVbkch8ssnnJQVbksj2pVErN+PJMLt809tVXX6lZOha52XP4RqSsyOXZ3vyttt58800leCRFLl+8lViukI0Tz1zyTDgvWcjuPmFLQSklcnn9MS9NmD9/vprBnzBhQsvylUceeaRliQLnDn8p4y9nzz33nPqVwIYDIteGKJlpo6si18xodNwq3bWg4xahh44QwExuAXpSSc4zYHyTDs/g5q9dffDBB2nNNddssY6XNbCYYHHBIpjXgBYTuSeddJIStCxsL7/8ciWgeQ0lz8qWErnjx49XIpfF7447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vbVif/nll9Puu+9Oe+yxR0ssVq5cSQsXLowcmx49etB6663Xqv3XX39NvXr1ourq6sj9mNawnHgtWrRICdvZs2erv5csWUIvvfQSdevWrcUtqcJqGkfd9kDk6iaqr79sjuvrET1JEHD18dNBEMSqQ2PtnBPD1eeHS1wUGKN8AuWIpvJ7L3zG008/TTfeeGPLm4sXL6Y111yTOnXqpF777rvvqKamhrp06aL+37VrV7rmmmvowgsvLGrCZ599ptqts846qs1ee+1FJ510Ev34449000030axZs+jzzz+nqqoqOuyww2js2LGq3c4770yNjY3q3+uvvz5tttlmdOSRR6rzs8f8+fPpxBNPpFdeeUXZxccdd9xBkyZNogceeIA23nhjXWhK9lMqXuxvVtS+/PLLxEI397jvvvuob9++LS9B5JZEHqkBRG4kTBVpBJFbEewdHhQit8MIC3YAkRsPV/RqKIFSoknCbBawQ4cOpU033VQNd++991L//v3Vn/yDZyJZyB100EGt3jr//PNp++23p6OPPrrV65deeqkSfVdffTVtvvnmFAQBffPNNzR48OAWkcvnMocvv/ySXn31VSVcDznkELr44otVm3yRy2L3nHPOUUJd+gO0WLyywvZvf/ub8qPYkf/BAZGrJ8Nx45kejugFBFwlIFWLIXJdzTBH/a6UyOXZWhaLLFYnT55Ma6yxhvr3Lbfcov59/PHHF4zIiBEjlEBlEZp7FBO5hx56KB144IE0cuTIgv3xTC6L7N12263l/Tlz5hCPc+2116olE7kilwXyMcccQ6effroS5tJHbrzeeustmjFjBj3//PORl3JA5MYTMYjceLiiVxBwhQBEriuRhp+iBColcvlGqMsuu4zuueceuv3229U60SOOOIIOPvhgWnvttWnDDTds4bDVVlvRGWecQUuXLqV9992XnnrqKdUmisgdNWoULVu2jG6++eaCa3ELiVzul5dGsKDl87Ii94UXXlDit1+/fnTuueeKxik7mPTMcUWctHvQS4IguNREF7BUzsSowCYQ+A8BiFxkAgjEQMAkkduzZ0+6++671Y1nb775ZsvsKq+DZVHLs5A8g7rrrruuRuKdd96h7t27U+/evdV7fOMZLzfgfs4880xad911lUDdZ599Wp1bTOQ+9thjdOutt6pZ0qzI5RlhFr68xpfX9lbigMit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";



function savePicture(Url){
    var blob=new Blob([''], {type:'application/octet-stream'});
    var url = URL.createObjectURL(blob);
    var a = document.createElement('a');
    a.href = Url;
    // a.download = Url.replace(/(.*\/)*([^.]+.*)/ig,"$2").split("?")[0];
    a.download = "qrcode.png";
    var e = document.createEvent('MouseEvents');
    e.initMouseEvent('click', true, false, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
    a.dispatchEvent(e);
    URL.revokeObjectURL(url);
}


function saveSimple(url){
    var oA = document.createElement("a");
    oA.download = '';// 设置下载的文件名，默认是'下载'
    oA.href = url;
    document.body.appendChild(oA);
    oA.click();
    oA.remove(); // 下
}

// savePicture(imgUrl);
saveSimple(imgUrl);