import PickList from "../Macro/PickList"
import Cart from "../Macro/Cart"

export default function CartPage() {

   return <div>
        <main  className="flex dark:bg-slate-950  flex-row min-w-[100vw] max-w-[100vw] font-inter ">
            <PickList />
            <Cart />
        </main>
    </div>
}