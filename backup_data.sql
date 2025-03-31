--
-- PostgreSQL database dump
--

-- Dumped from database version 17.4
-- Dumped by pg_dump version 17.4

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET transaction_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- Data for Name: accessories; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.accessories (id, accessory_name_ru, accessory_name_en, accessory_name_uz, accessory_description_ru, accessory_description_en, accessory_description_uz) FROM stdin;
2	Автоматический диспенсер для воды с USB	Automatic Water Dispenser with USB	USB orqali avtomatik suv dispensi	Портативный автоматический диспенсер для воды с USB-зарядкой – удобное решение для розлива воды из бутылей и галлонов. Оснащен мощным насосом и работает от аккумулятора, обеспечивая легкость использования дома, в офисе и в дороге.	The portable automatic water dispenser with USB charging is a convenient solution for dispensing water from bottles and gallons. Equipped with a powerful pump and rechargeable battery, it ensures easy use at home, in the office, and on the go.	USB zaryadlanadigan portativ avtomatik suv dispensi – idishlar va gallonlardan suv quyish uchun qulay yechim. Kuchli nasos va qayta zaryadlanuvchi batareya bilan jihozlangan bo‘lib, uyda, ofisda va safarlarda foydalanish uchun ideal.
3	Диспенсер для бутылок с водой	Water Bottle Dispenser	Suv butilkasi dispenseri	Встроенный аккумулятор 1200 мАч. Включение одной кнопкой, чувствительные сенсоры, подходит для дома, офиса, спорта, отдыха. Бесшумная работа, идеально для ночи и спокойной обстановки. Гигиеничный дизайн, защищает от пыли и контакта с животными, компактный (14,5 × 6,4 × 6,4 см). Подходит для бутылей 1–5 галлонов (3,7–18,9 л), можно использовать как настольный диспенсер.	Rechargeable & Long-Lasting – Built-in 1200mAh battery. Easy to Use – One-button operation, sensitive touch keys, perfect for home, office, gym, and outdoor activities. Quiet Motor – Noise-free operation, ideal for nighttime use and quiet environments. Foldable Tap – Hygienic design, prevents dust and pet contact, compact (14.5 × 6.4 × 6.4 cm), easy to carry. Compatibility – Fits 1–5 gallon (3.7–18.9L) bottles, can be used as a desktop water dispenser.	Qayta zaryadlanuvchi va bardoshli – Ichki 1200 mA·soat batareya. Foydalanish oson – Bitta tugma bilan yoqish/o‘chirish, sezgir tugmalar, uy, ofis, sport, tabiat qo‘ynida foydalanish uchun. Yaxshi motor – Shovqinsiz ishlaydi, tun va sokin joylar uchun ideal. Yig‘iladigan kran – Gigiyenik dizayn, chang va uy hayvonlari bilan aloqani kamaytiradi, 14,5 × 6,4 × 6,4 sm, ixcham va qulay. Moslik – 1–5 gallon (3,7–18,9 litr) idishlarga mos keladi, stol usti dispenseri sifatida ishlatilishi mumkin.
\.


--
-- Data for Name: accessory_photos; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.accessory_photos (id, accessory_id, accessory_photo_url) FROM stdin;
3	2	db/accessory_photos/photo_62c18069-b2c9-4883-9c0c-d29710d99e9f_2.jpg
4	2	db/accessory_photos/photo_46a84546-326c-4f4b-832f-3926e9bee570_2.png
5	2	db/accessory_photos/photo_7620249e-f3c1-40be-9845-87f85f2e1f1f_2.png
6	2	db/accessory_photos/photo_dac8e5bb-94fe-4b11-a23e-16e113929428_2.png
7	3	db/accessory_photos/photo_205d4e90-0646-47ee-ac7c-0d20a58a0edc_3.jpg
8	3	db/accessory_photos/photo_8ef16080-7873-4d7e-8318-9a69136c3949_3.png
9	3	db/accessory_photos/photo_2c7f8c2f-c651-42e4-b847-68d6b6f44444_3.png
10	3	db/accessory_photos/photo_9caf0822-e123-4cc5-8a74-462b30dcd389_3.png
11	3	db/accessory_photos/photo_2d1f46f2-70b7-4951-9b4a-9247703c46ae_3.png
\.


--
-- Data for Name: products; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.products (id, product_name_ru, product_name_en, product_name_uz, product_description_ru, product_description_en, product_description_uz) FROM stdin;
11	Вода 0.25 л	Water 0.25 L	Suv 0.25 L	Скоро	Soon	Tez orada
12	Вода 0.5 л	Water 0.5 L	Suv 0.5 L	Скоро	Soon	Tez orada
13	Вода 1 л	Water 1 L	Suv 1 L	Скоро	Soon	Tez orada
15	Вода 5 л	Water 5 L	Suv 5 L	Скоро	Soon	Tez orada
16	Вода 10 л	Water 10 L	Suv 10 L	Скоро	Soon	Tez orada
19	Вода 1.5 л	Water 1.5 L	Suv 1.5 L	Скоро	Soon	Tez orada
18	Вода 18.9 л	Water 18.9 L	Suv 18.9 L	В наличии	Available in stock	Mavjud
\.


--
-- Data for Name: product_photos; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.product_photos (id, product_id, product_photo_url) FROM stdin;
11	18	db/photos/photo_b1ff2db9-8b71-4d40-92ec-e480ec2f7b9c_18.JPG
12	11	db/photos/photo_584e2e50-c770-4334-9dd4-c2f7f94a5f16_11.png
13	15	db/photos/photo_d5fe559c-cccc-4fe2-91b0-59ca0e2de7f3_15.png
16	16	db/photos/photo_30d9c2e1-e140-42e3-8ac0-648116a312ea_16.png
17	12	db/photos/photo_a95affd7-caca-4fe0-8e8a-9862850081ce_12.png
18	13	db/photos/photo_bca94af1-35e8-4dcc-bdc7-a96638d9e663_13.png
19	19	db/photos/photo_4fb3b804-eb93-4058-bf17-1efc6a445cba_19.png
\.


--
-- Name: accessories_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.accessories_id_seq', 3, true);


--
-- Name: accessory_photos_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.accessory_photos_id_seq', 11, true);


--
-- Name: product_photos_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.product_photos_id_seq', 19, true);


--
-- Name: products_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.products_id_seq', 19, true);


--
-- PostgreSQL database dump complete
--

