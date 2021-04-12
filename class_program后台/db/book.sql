# Host: localhost  (Version: 5.7.26)
# Date: 2021-03-17 14:19:02
# Generator: MySQL-Front 5.3  (Build 4.234)

/*!40101 SET NAMES utf8 */;

#
# Structure for table "book"
#

DROP TABLE IF EXISTS `book`;
CREATE TABLE `book` (
  `id` int(10) NOT NULL,
  `name` char(50) COLLATE utf8_unicode_ci NOT NULL,
  `author` char(30) COLLATE utf8_unicode_ci NOT NULL,
  `category` char(30) COLLATE utf8_unicode_ci NOT NULL,
  `description` char(200) COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

#
# Data for table "book"
#

/*!40000 ALTER TABLE `book` DISABLE KEYS */;
/*!40000 ALTER TABLE `book` ENABLE KEYS */;

#
# Structure for table "username"
#

DROP TABLE IF EXISTS `username`;
CREATE TABLE `username` (
  `Sname` char(100) COLLATE utf8_unicode_ci NOT NULL,
  `Sphone` char(200) COLLATE utf8_unicode_ci NOT NULL,
  `Spassword` char(200) COLLATE utf8_unicode_ci NOT NULL,
  `tpassword` char(200) COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`Sphone`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

#
# Data for table "username"
#

/*!40000 ALTER TABLE `username` DISABLE KEYS */;
INSERT INTO `username` VALUES ('zjx','123123','$2a$10$mgIHjGXEN4zhTW0yESx78OnoolWIkefqOHE.PTJB5RIXBUTdq1SFy','$2a$10$B97S6L0.25AKoCYEreOMTuCILZPJP6jqZZkMC0ZHjxCx/pzGbnQ2W'),('zjxzjx','15097068514','$2a$10$L7sZ9D5dT40kwwOBbDMazuGLe4BjbuDLLbBENH46I5QGOFOsrXOhu','$2a$10$3AigdSDU878Whqy/3eIFs.osMvu5amLK.HO2kTSAuM5eLmFEJucom'),('你是我的奥木列','15097068519','$2a$10$xDPZophudkKCml8Fth5fp.rP2ckwESFxdEqg5rEpxY3vFOvris6km','$2a$10$XgmXe/b836ApGq06g1AJMu7FRXNQl4aer4nKyJuknJ570iItsCWTO'),('zjxweb','18039','$2a$10$ol2nzNGe8HeBx7abK/WxA.1QEz8LaUelogfIaIM7DBJlcJ8ZLxF9y','$2a$10$IZLRZDoguccKKqmzXn8ap.XUdHwSw6xSqTPTIck14k05UUbu/1mf.'),('xxlovelyr','18112349999','$2a$10$qFQXz5h7td9a/OIqpnunXOw7AHtkbp0CeWWgIQACwVgszhB3tIC4i','$2a$10$f/jjPkX6a6eJOWAO.M/vzu9CW33LMqDlnGH6.FSJGvDYOprBmLe6C'),('zjxweb1','18198031','$2a$10$EYFtkCiG5vLjh0KmiKWDBOiCGIfd59VWIcdWs5b697DYrOPT8Kx5W','$2a$10$ga93weON8DTZ3FO/4jo34O/q6131uW9y73324H6.KG8ZX6RE5HuQy'),('zjxweb','18198031039','$2a$10$ol2nzNGe8HeBx7abK/WxA.1QEz8LaUelogfIaIM7DBJlcJ8ZLxF9y','$2a$10$IZLRZDoguccKKqmzXn8ap.XUdHwSw6xSqTPTIck14k05UUbu/1mf.'),('nishiwode','18198031111','$2a$10$leiOeUvL5t13/iEd9P7NTeamO/YhgNlcWKZjM7ep2KqXZRt.NbECa','$2a$10$eP0jyvTd8CJRLrPZENz7G.K1MaD93AkAN/OJvyfNNYRW/AZZ56Hb6'),('zjxweb','2147483647','$2a$10$ol2nzNGe8HeBx7abK/WxA.1QEz8LaUelogfIaIM7DBJlcJ8ZLxF9y','$2a$10$IZLRZDoguccKKqmzXn8ap.XUdHwSw6xSqTPTIck14k05UUbu/1mf.');
/*!40000 ALTER TABLE `username` ENABLE KEYS */;

#
# Structure for table "users"
#

DROP TABLE IF EXISTS `users`;
CREATE TABLE `users` (
  `Susername` char(30) COLLATE utf8_unicode_ci NOT NULL,
  `Ssex` char(10) COLLATE utf8_unicode_ci NOT NULL,
  `Sage` char(10) COLLATE utf8_unicode_ci NOT NULL,
  `Smajor` char(50) COLLATE utf8_unicode_ci NOT NULL,
  `Sschool` char(50) COLLATE utf8_unicode_ci NOT NULL,
  `Sqq` int(10) NOT NULL,
  `Saddress` char(50) COLLATE utf8_unicode_ci NOT NULL,
  `Smotto` char(100) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

#
# Data for table "users"
#

/*!40000 ALTER TABLE `users` DISABLE KEYS */;
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
