import { faShoppingCart, faTruck, faTimesCircle, faDollarSign, faBullseye, faStar, faList } from '@fortawesome/free-solid-svg-icons';
export const basicInfo = [
    {
        text: "Total Orders",
        count: 75,
        percentage: 3,
        profit: 1,
        icon:faShoppingCart,
        color:`blue-500`,
        bg:'bg-[#293467]'
    },
    {
        text: "Total Delivered",
        count: 70,
        percentage: 3,
        profit: 0,
        icon:faTruck,
        color:`green-500`,
        bg:'bg-[#175246]'
    },
    {
        text: "Total Cancelled",
        count: 5,
        percentage: 3,
        profit: 1,
        icon:faTimesCircle,
        color:`red-500`,
        bg:'bg-[#5E3238]'
    },
    {
        text: "Total Revenue",
        count: "$12k", 
        percentage: 3,
        profit: 1,
        icon:faDollarSign,
        color:`pink-500`,
        bg:'bg-[#5B2A4A]'
    }
];
