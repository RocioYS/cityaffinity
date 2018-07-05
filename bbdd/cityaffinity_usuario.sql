-- MySQL dump 10.13  Distrib 8.0.11, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: cityaffinity
-- ------------------------------------------------------
-- Server version	8.0.11

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
 SET NAMES utf8 ;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `usuario`
--

DROP TABLE IF EXISTS `usuario`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `usuario` (
  `idusuario` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(45) NOT NULL,
  `email` varchar(45) NOT NULL,
  `nacionalidad` varchar(45) NOT NULL,
  `password` varchar(45) NOT NULL,
  PRIMARY KEY (`idusuario`)
) ENGINE=InnoDB AUTO_INCREMENT=55 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuario`
--

LOCK TABLES `usuario` WRITE;
/*!40000 ALTER TABLE `usuario` DISABLE KEYS */;
INSERT INTO `usuario` VALUES (4,'yukjuykjuh','','sa',''),(5,'Maria','maria@gmail.com','sa',''),(6,'yukjuykjuh','maria@gmail.com','fgf',''),(7,'','','5',''),(8,'Maria','maria@gmail.com','5',''),(9,'','','',''),(10,'Maria','maria@gmail.com','fdgfd444','123'),(11,'','','',''),(12,'Maria','maria@gmail.com','lkfjds','123'),(13,'','','',''),(14,'','','',''),(15,'Maria','maria@gmail.com','lkfjds','123'),(16,'Maria','maria@gmail.com','lkfjds','123'),(17,'Maria','maria@gmail.com','lkfjds','123'),(18,'Maria','maria@gmail.com','lkfjds','123'),(19,'Maria','maria@gmail.com','lkfjds','123'),(20,'Maria','maria@gmail.com','lkfjds','123'),(21,'Maria','maria@gmail.com','lkfjds','123'),(22,'Rocio','watpop_neko@hotmail.com','lkfjds','123'),(23,'','','',''),(24,'','','',''),(25,'Rocío','maria@gmail.com','lkfjds','123'),(26,'Rocío','maria@gmail.com','lkfjds','123'),(27,'Rocío','maria@gmail.com','lkfjds','123'),(28,'Rocío','maria@gmail.com','lkfjds','123'),(29,'Rocío','maria@gmail.com','lkfjds','123'),(30,'Rocío','maria@gmail.com','lkfjds','123'),(31,'Rocío','maria@gmail.com','lkfjds','123'),(32,'Rocío','maria@gmail.com','lkfjds','123'),(33,'Rocío','maria@gmail.com','lkfjds','123'),(34,'Rocío','maria@gmail.com','lkfjds','123'),(35,'Rocío','maria@gmail.com','lkfjds','123'),(36,'Rocío','maria@gmail.com','lkfjds','123'),(37,'Rocío','maria@gmail.com','lkfjds','123'),(38,'Rocío','maria@gmail.com','lkfjds','123'),(39,'Rocío','maria@gmail.com','lkfjds','123'),(40,'Rocío','maria@gmail.com','lkfjds','123'),(41,'Rocío','maria@gmail.com','lkfjds','123'),(42,'Rocío','maria@gmail.com','lkfjds','123'),(43,'Rocío','maria@gmail.com','lkfjds','123'),(44,'','','',''),(45,'Rocío','maria@gmail.com','lkfjds','123'),(46,'Rocío','maria@gmail.com','lkfjds','123'),(47,'Rocío','maria@gmail.com','lkfjds','123'),(48,'Rocío','maria@gmail.com','lkfjds','123'),(49,'Rocío','maria@gmail.com','lkfjds','123'),(50,'Rocio','maria@gmail.com','lkfjds','456'),(51,'Rocío','rocioyustesanchez@gmail.com','sa','789'),(52,'Rocío','','',''),(53,'Maria','','',''),(54,'Maria','maria@gmail.com','sa','123');
/*!40000 ALTER TABLE `usuario` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2018-07-04 16:43:18
