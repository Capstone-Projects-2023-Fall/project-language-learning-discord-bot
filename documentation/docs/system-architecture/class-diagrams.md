# Class Diagram
:::note

The highlighted classes represent implemented Discord commands, commonly referred to as [cogs](https://discordpy.readthedocs.io/en/v2.3.2/ext/commands/cogs.html), within the system.

:::
## Command Diagram

![Cog drawio](https://github.com/cis3296s23/DungeonHuntingRPG/assets/74037708/36508a00-ee5c-4b36-9328-85a0057c53c5)
##### Figure 1.1 Command Diagram
Figure 1.1 represents the commands users will use within the Discord environment. 
<details>
  <summary>Description</summary>
  The association arrows denote a dependency, underscoring that instances of 'main' are essential for executing Discord cog classes, i.e., the Discord commands. Specifically, 'main' enables these cog classes to run as a central coordinator for Discord-related functionalities. Each Discord cog class contributes specific features or commands to execute operations within the system.
</details>

## Database Diagram

![Database Diagram drawio](https://github.com/cis3296s23/DungeonHuntingRPG/assets/74037708/88e28041-08ae-4bff-9848-845691b1437c)
##### Figure 1.2 Database Diagram
Figure 1.2 represents the classes that utilize the Database class to function. 
### Description
The Database Diagram depicts a set of classes, including the Database class, which serves as a central component. The compositional relationship indicates that other classes in the system are composed of or depend on the Database class. These classes interact with the Database class by utilizing its commands, implying that they have associations or dependencies on the Database class to perform specific functionalities.

## Voice Diagram

![Voice Class Diagram](https://github.com/cis3296s23/DungeonHuntingRPG/assets/74037708/39435038-a78a-4559-8f9b-c087a40e1d1e)
##### Figure 1.3 Voice Diagram
Figure 1.3 represents the structure of the voice functionality, highlighting the essential classes required for the proper functioning of the voice cogs.
### Description
This diagram depicts the functionality of classes pertaining to voice management. The dependency relationship indicates that the voice cogs depend on commands from other classes to execute specific actions.

## Command Diagram Extended

![Command Class Diagram](https://github.com/cis3296s23/DungeonHuntingRPG/assets/74037708/be5b460b-26c9-47d1-84b4-a87ffbf3e6f8)
##### Figure 1.4 Command Diagram Extended
Figure 1.4 represents a similar structure to Figure 1.3, highlighting the essential classes required for the proper functioning of our Discord commands. 
### Description 
This diagram is similar to Figure 1.3, it further depicts the functionality of the Discord commands. The dependency relationship indicates that the cogs depend on commands from other classes to execute specific actions.
