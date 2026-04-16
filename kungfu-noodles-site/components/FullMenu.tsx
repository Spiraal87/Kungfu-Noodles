"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface MenuItem {
  name: string;
  chinese: string;
  price: string;
  note?: string;
}

interface MenuTab {
  id: string;
  label: string;
  chinese: string;
  items: MenuItem[];
}

const menuTabs: MenuTab[] = [
  {
    id: "soups",
    label: "Noodle Soups",
    chinese: "汤面",
    items: [
      { name: "Signature Beef Noodle Soup", chinese: "招牌汤面", price: "$14.99" },
      { name: "Spicy Beef Noodle Soup", chinese: "辣牛肉面", price: "$14.99" },
      { name: "Braised Beef Noodle Soup", chinese: "红烧汤面", price: "$14.99" },
      { name: "Pickled Veggie Beef Noodle Soup", chinese: "老坛酸菜汤面", price: "$14.99" },
      { name: "House Special Noodle Soup", chinese: "本楼汤面", price: "$15.99", note: "Beef, beef brisket, meatball, tendon" },
      { name: "Double Pepper Beef Noodle Soup", chinese: "双椒牛肉面", price: "$14.99" },
      { name: "Pickled Veggie Pork Noodle Soup", chinese: "雪菜肉丝汤面", price: "$14.99" },
      { name: "Braised Pork Intestine Noodle Soup", chinese: "红烧肥肠面", price: "$14.99" },
      { name: "Pork Feet Noodle Soup", chinese: "猪脚面", price: "$15.99" },
      { name: "Spicy Seafood Noodle Soup", chinese: "辣海鲜拉面", price: "$16.99" },
    ],
  },
  {
    id: "dumplings",
    label: "Dumplings & Buns",
    chinese: "饺子包子",
    items: [
      { name: "Xiao Long Bao (8)", chinese: "小笼包", price: "$11.99" },
      { name: "Lamb Skewers (2)", chinese: "羊肉串", price: "$3.99" },
      { name: "Chicken Popcorn", chinese: "鸡米花", price: "$5.99" },
      { name: "Fried Pork Dumplings (4)", chinese: "煎金炸饺", price: "$5.99" },
      { name: "Veggie Egg Roll (2)", chinese: "素春卷", price: "$2.99" },
      { name: "Chicken Egg Roll (1)", chinese: "鸡肉春卷", price: "$2.99" },
      { name: "Crab Cheese Wontons (4)", chinese: "芝士蟹饺", price: "$4.99" },
      { name: "Takoyaki (4)", chinese: "章鱼小丸子", price: "$5.99" },
      { name: "Fried Chicken Wings (2)", chinese: "香酥鸡翅", price: "$4.99" },
      { name: "Hot Chili Dumplings (6)", chinese: "红油水饺", price: "$6.99" },
      { name: "Meat In Bun", chinese: "肉夹馍", price: "$7.99" },
      { name: "Steamed Pork & Shrimp Dumplings (8)", chinese: "三鲜水饺", price: "$11.99" },
      { name: "Steamed Beef Dumplings (8)", chinese: "牛肉水饺", price: "$11.99" },
      { name: "Steamed Pork Dumplings (8)", chinese: "猪肉水饺", price: "$11.99" },
      { name: "Steamed Veggie Dumplings (8)", chinese: "蔬菜蒸饺", price: "$11.99" },
      { name: "BBQ Pork Buns (2)", chinese: "叉烧包", price: "$4.99" },
      { name: "Pork Pot Stickers (8)", chinese: "猪肉锅贴", price: "$11.99" },
      { name: "Pan-Fried Pork Buns (4)", chinese: "生煎包", price: "$9.99" },
      { name: "Steamed Pork Buns (4)", chinese: "菜肉大包", price: "$11.99" },
    ],
  },
  {
    id: "stirfried",
    label: "Stir Fried",
    chinese: "炒面饭",
    items: [
      { name: "Stir-Fried Noodles", chinese: "炒面", price: "$14.99" },
      { name: "Stir-Fried Rice-Noodles", chinese: "炒米粉", price: "$14.99" },
      { name: "Kungfu Fried Rice", chinese: "功夫蛋炒饭", price: "$13.99" },
      { name: "Kimchi Beef Fried Rice", chinese: "辣白菜牛肉炒饭", price: "$14.99" },
      { name: "Pickled Veggie W.Pork Fried Rice", chinese: "客菜肉丝炒饭", price: "$14.99" },
      { name: "House Special Fried Rice", chinese: "本楼炒饭", price: "$14.99", note: "Beef, Chicken, Pork, Shrimp" },
      { name: "Cumin Lamb Stir-Fried Noodles", chinese: "孜然羊肉炒面", price: "$15.99" },
      { name: "Dan Dan Noodles", chinese: "担担面", price: "$12.99", note: "Minced beef with Spicy Szechuan Sauce" },
      { name: "Zha Jiang Noodles", chinese: "炸酱面", price: "$12.99" },
    ],
  },
  {
    id: "wok",
    label: "From The Wok",
    chinese: "锅中菜",
    items: [
      { name: "Braised Beef", chinese: "红烧牛肉", price: "$14.99" },
      { name: "Beef Brisket", chinese: "红烧牛腩", price: "$14.99" },
      { name: "Stir-Fried Egg With Tomato", chinese: "番茄炒蛋", price: "$14.99" },
      { name: "Orange Chicken", chinese: "陈皮鸡", price: "$14.99" },
      { name: "Cumin Lamb", chinese: "孜然羊肉", price: "$14.99" },
      { name: "Cumin Beef", chinese: "孜然牛", price: "$14.99" },
      { name: "Pepper Lamb", chinese: "小椒羊肉", price: "$14.99" },
      { name: "Pepper Beef", chinese: "小椒牛肉", price: "$14.99" },
      { name: "Mixed Veggie Tofu", chinese: "蔬菜豆腐", price: "$14.99" },
      { name: "Black Pepper Beef", chinese: "黑椒牛柳", price: "$14.99" },
      { name: "Shredded Pepper Pork", chinese: "青椒肉丝", price: "$14.99" },
      { name: "Garlic Pork", chinese: "鱼香肉丝", price: "$14.99" },
      { name: "Broccoli", chinese: "乔蓝", price: "$14.99" },
      { name: "Spicy Chicken With Potatoes", chinese: "大盘鸡", price: "$28.99", note: "Serves 2" },
      { name: "Kungpao", chinese: "宫保", price: "$14.99" },
      { name: "Curry", chinese: "咖喱", price: "$14.99" },
      { name: "Mapo Tofu", chinese: "麻婆豆腐", price: "$14.99" },
      { name: "Mongolian Beef", chinese: "蒙古牛肉", price: "$14.99" },
    ],
  },
  {
    id: "cold",
    label: "Cold Dishes",
    chinese: "凉菜",
    items: [
      { name: "Cucumber Salad", chinese: "凉拌黄瓜", price: "$6.99" },
      { name: "Wood-Ears Mushroom Salad", chinese: "脆脆木耳", price: "$6.99" },
      { name: "Bean-Curd Rolls Salad", chinese: "凉拌腐竹", price: "$6.99" },
      { name: "Spicy Pork Ears", chinese: "香辣猪耳", price: "$9.99" },
      { name: "Spicy Beef Tendon", chinese: "香辣牛筋", price: "$9.99" },
    ],
  },
  {
    id: "sides",
    label: "Sides",
    chinese: "小食",
    items: [
      { name: "Side Noodles", chinese: "单独拉面", price: "$3.99" },
      { name: "Side Beef Brisket", chinese: "单独牛腩", price: "$9.99" },
      { name: "Side Beef Shank", chinese: "单独牛腱", price: "$9.99" },
      { name: "Side Steamed Rice", chinese: "白饭", price: "$2.00" },
      { name: "Side Baked Bun", chinese: "白吉馍", price: "$3.99" },
    ],
  },
  {
    id: "boba",
    label: "Boba Drinks",
    chinese: "奶茶",
    items: [
      { name: "Signature Milk Tea", chinese: "招牌奶茶", price: "$5.99" },
      { name: "Thai Tea", chinese: "泰式奶茶", price: "$5.99" },
      { name: "Taro Milk Tea", chinese: "紫薯奶茶", price: "$5.99" },
      { name: "Matcha Milk Tea", chinese: "抹茶奶茶", price: "$5.99" },
      { name: "Honeydew Milk Tea", chinese: "哈密瓜奶茶", price: "$5.99" },
      { name: "Flavored Milk Tea", chinese: "果味奶茶", price: "$5.99" },
    ],
  },
];

function MenuItemRow({ item }: { item: MenuItem }) {
  return (
    <li className="flex items-start justify-between gap-4 py-3 border-b border-[#2a2a2a] last:border-0">
      <div className="flex-1 min-w-0">
        <span className="text-[#f5efe6] text-sm font-medium">{item.name}</span>
        {item.note && (
          <span className="text-[#a89888] text-xs ml-2">— {item.note}</span>
        )}
        <div
          className="text-[#c9843a] text-xs mt-0.5 font-serif tracking-wide"
          lang="zh"
        >
          {item.chinese}
        </div>
      </div>
      <span className="font-serif font-bold text-[#cc2200] text-sm tabular-nums flex-shrink-0">
        {item.price}
      </span>
    </li>
  );
}

export default function FullMenu() {
  const [activeTab, setActiveTab] = useState("soups");
  const tabBarRef = useRef<HTMLDivElement>(null);

  const currentTab = menuTabs.find((t) => t.id === activeTab)!;

  return (
    <section
      id="menu"
      className="bg-[#0d0d0d] py-20 sm:py-28 px-4 sm:px-6"
      aria-label="Full menu"
    >
      <div className="max-w-4xl mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <span className="font-serif text-[#cc2200] text-sm tracking-widest uppercase mb-3 block">
            Full Menu
          </span>
          <h2 className="font-serif font-black text-3xl sm:text-4xl text-[#f5efe6]">
            Everything We Make
          </h2>
        </motion.div>

        {/* Tab bar */}
        <div
          ref={tabBarRef}
          className="flex gap-1 bg-[#1a1a1a] rounded-lg p-1 overflow-x-auto tab-scroll mb-8"
          role="tablist"
          aria-label="Menu categories"
        >
          {menuTabs.map((tab) => (
            <button
              key={tab.id}
              role="tab"
              aria-selected={activeTab === tab.id}
              aria-controls={`panel-${tab.id}`}
              id={`tab-${tab.id}`}
              onClick={() => setActiveTab(tab.id)}
              className={`flex-shrink-0 flex flex-col items-center px-3 py-2 rounded text-xs font-medium transition-all duration-200 min-w-[80px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#cc2200] ${
                activeTab === tab.id
                  ? "bg-[#cc2200] text-[#f5efe6] shadow-sm"
                  : "text-[#a89888] hover:text-[#f5efe6] hover:bg-[#2a2a2a]"
              }`}
            >
              <span>{tab.label}</span>
              <span
                className={`font-serif text-[10px] mt-0.5 tracking-wide ${
                  activeTab === tab.id ? "text-[#f5efe6]/70" : "text-[#c9843a]"
                }`}
                lang="zh"
              >
                {tab.chinese}
              </span>
            </button>
          ))}
        </div>

        {/* Tab panel */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            role="tabpanel"
            id={`panel-${activeTab}`}
            aria-labelledby={`tab-${activeTab}`}
            className="bg-[#1a1a1a] rounded-lg border border-[#2a2a2a] p-5 sm:p-6"
          >
            <div className="flex items-center justify-between mb-5">
              <h3 className="font-serif font-bold text-xl text-[#f5efe6]">
                {currentTab.label}
              </h3>
              <span
                className="font-serif text-[#c9843a] text-base tracking-widest"
                lang="zh"
              >
                {currentTab.chinese}
              </span>
            </div>
            <ul className="divide-y divide-[#2a2a2a] list-none m-0 p-0">
              {currentTab.items.map((item) => (
                <MenuItemRow key={item.name + item.price} item={item} />
              ))}
            </ul>
          </motion.div>
        </AnimatePresence>

        {/* Noodle style note */}
        <div className="mt-6 bg-[#1a0a0a] border border-[#cc2200]/20 rounded-lg p-4 text-sm text-center">
          <p className="text-[#a89888]">
            Regular noodles served by default. For other styles note your preference:
          </p>
          <p className="text-[#f5efe6] mt-1 font-medium">
            Thin · Regular · Thick · Chive · Wide · Extra Wide · Knife-Sliced
          </p>
          <p
            className="text-[#c9843a] font-serif mt-1 tracking-wide"
            lang="zh"
          >
            细面 · 正常 · 粗面 · 韭叶 · 宽面 · 大宽面 · 刀削面
          </p>
        </div>

        {/* Order CTA */}
        <div className="mt-8 text-center">
          <a
            href="https://pos.chowbus.com/online-ordering/store/21094"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#cc2200] hover:bg-[#e02500] text-[#f5efe6] font-semibold rounded text-base transition-colors duration-200"
          >
            Order Online
            <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
