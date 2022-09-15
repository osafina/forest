CREATE DATABASE  IF NOT EXISTS `forest_db` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_spanish_ci */;
USE `forest_db`;
-- MySQL dump 10.13  Distrib 8.0.29, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: forest_db
-- ------------------------------------------------------
-- Server version	5.5.5-10.4.24-MariaDB

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `product`
--

DROP TABLE IF EXISTS `product`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `product` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) COLLATE utf8mb4_spanish_ci DEFAULT NULL,
  `description` varchar(200) COLLATE utf8mb4_spanish_ci DEFAULT NULL,
  `siteId` int(11) DEFAULT NULL,
  `typeId` int(11) DEFAULT NULL,
  `stock` int(11) DEFAULT NULL,
  `price` int(11) NOT NULL,
  `createdAt` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL CHECK (json_valid(`createdAt`)),
  `updatedAt` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL CHECK (json_valid(`updatedAt`)),
  `imagen` varchar(100) COLLATE utf8mb4_spanish_ci DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `product`
--

LOCK TABLES `product` WRITE;
/*!40000 ALTER TABLE `product` DISABLE KEYS */;
INSERT INTO `product` VALUES (10,'Aglaonema','Es la planta perfecta para quienes quieran disfrutar de naturaleza tropical frondosa y llamativa. Más allá de su atractivo, los cuidados de la aglaonema hacen de ella la planta ideal para muchos hogar',0,0,NULL,3500,'\"2022-09-15T04:01:09.217Z\"','\"2022-09-15T04:01:09.217Z\"','1663214468775_img.jpg'),(11,'Alocasia','La alocasia, también conocida como Oreja de elefante, tiene su origen en la India y en Sri Lanka. Pertenece a la familia de las aráceas como la zamioculca, tiene un tallo grueso y carnoso, que crece d',0,0,NULL,2700,'\"2022-09-15T04:03:34.519Z\"','\"2022-09-15T04:03:34.519Z\"','1663214614402_img.jpg'),(12,'Caladium','Son plantas herbáceas con tubérculos. Las hoja son radicales, es decir, nacen directamente del tubérculo, aparecen al final de largos tallos (hasta 30 cm de altura) y pueden llegar a medir hasta 60 cm',0,0,NULL,2640,'\"2022-09-15T04:05:01.026Z\"','\"2022-09-15T04:05:01.026Z\"','1663214700900_img.jpg'),(13,'Colocasia Black','La Colocasia Black Magic es una planta que pertenece a la familia de las Araceae. Al ser originaria de climas tropicales, necesita de humedad ambiental todo el año para crecer sana y fuerte.',0,0,NULL,4700,'\"2022-09-15T04:07:04.547Z\"','\"2022-09-15T04:07:04.547Z\"','1663214824392_img.jpg'),(14,'Euphorbia','Las euphorbias son plantas bastante sencillas de mantener y de cuidar. Tan solo van a requerir ciertos “mimos” y un poco de paciencia de tu parte.',0,0,NULL,6700,'\"2022-09-15T04:09:08.425Z\"','\"2022-09-15T04:09:08.425Z\"','1663214948375_img.jpg'),(15,'Gomero','Requiere mucha luz, incluso sol directo, por lo que necesita un entorno luminoso y amplio para crecer con comodidad.\r\nEn ubicaciones sombrías y oscuras pierde la mayoría de sus hojas. Lo mismo ocurre ',0,0,NULL,4000,'\"2022-09-15T04:15:03.653Z\"','\"2022-09-15T04:15:03.653Z\"','1663215303430_img.jpg'),(16,'Monstera Deliciosa','La costilla de Adán es una planta muy popular que se caracteriza por tener unas grandes hojas verdes partidas, como si se tratase de unas costillas. ',0,0,NULL,3500,'\"2022-09-15T04:22:23.294Z\"','\"2022-09-15T04:22:23.294Z\"','1663215743101_img.jpg');
/*!40000 ALTER TABLE `product` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `site`
--

DROP TABLE IF EXISTS `site`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `site` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(45) COLLATE utf8mb4_spanish_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `site`
--

LOCK TABLES `site` WRITE;
/*!40000 ALTER TABLE `site` DISABLE KEYS */;
/*!40000 ALTER TABLE `site` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `type`
--

DROP TABLE IF EXISTS `type`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `type` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) COLLATE utf8mb4_spanish_ci NOT NULL,
  PRIMARY KEY (`id`,`name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `type`
--

LOCK TABLES `type` WRITE;
/*!40000 ALTER TABLE `type` DISABLE KEYS */;
/*!40000 ALTER TABLE `type` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(45) COLLATE utf8mb4_spanish_ci NOT NULL,
  `adress` varchar(45) COLLATE utf8mb4_spanish_ci DEFAULT NULL,
  `telephone` int(11) DEFAULT NULL,
  `email` varchar(45) COLLATE utf8mb4_spanish_ci DEFAULT NULL,
  `password` varchar(100) COLLATE utf8mb4_spanish_ci DEFAULT NULL,
  `image` varchar(45) COLLATE utf8mb4_spanish_ci DEFAULT NULL,
  `profile` int(11) DEFAULT NULL,
  `createdAt` timestamp(6) NULL DEFAULT NULL,
  `updatedAt` timestamp(6) NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (1,'\"Federico\"','\"123\"',0,'fedefmartinez@hotmail.com','12345678','\"/image\"',1,NULL,NULL),(2,'fede','123',NULL,'fede@g.com','$2a$10$jYo42RYkwNYHTl9UwIaNwOnZRjUSzHA1TcomB8E7RzHC93woZr2Bm','Captura de pantalla (35).png',NULL,'2022-09-05 02:07:25.000000','2022-09-05 02:07:25.000000'),(3,'fedefmartinez@hotmail.com','456',NULL,'fedefmartinez@gmail.com','$2a$10$mIsCt1F2Hxi/NkUQtpq6P.JteLu3mGNda363wCB3r/luECLwMTaW.','photo5138883225718991660-removebg-preview.png',NULL,'0000-00-00 00:00:00.000000','0000-00-00 00:00:00.000000');
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-09-15  8:45:56
